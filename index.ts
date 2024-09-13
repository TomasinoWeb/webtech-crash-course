import express, { Request } from "express";
import { z } from "zod";
import { handleAsync } from "./handleAsync";
import crs from "crypto-random-string";
import { hashPassword } from "./hash";
import { PrismaClient, Tag, Task } from "@prisma/client/";
import jsonwebtoken from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { TagDTO, TaskDTO } from "./dto";
import cors from "cors";

const app = express();
const db = new PrismaClient();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const credentialsValidator = z.object({
  username: z.string(),
  password: z.string(),
});

app.post(
  "/api/register",
  handleAsync(async (request, response) => {
    const { username, password } = await credentialsValidator.parseAsync(request.body);
    const salt = crs({ length: 64 });
    const hash = await hashPassword(password, salt);

    await db.user.create({
      data: { username, hash, salt },
    });

    response.json({ success: true });
  })
);

const JWT_SECRET = "Urxud/rM7mk1zr3gXY7OeaRD2EX/Fr+peO6kmQsEXB6sC1/R6K9psCFq1mpxWLgK";

app.post(
  "/api/login",
  handleAsync(async (request, response, next) => {
    const { username, password } = await credentialsValidator.parseAsync(request.body);
    const user = await db.user.findFirst({ where: { username } });

    if (user) {
      const hash = await hashPassword(password, user.salt);
      const jwt = jsonwebtoken.sign({ uuid: user.uuid }, JWT_SECRET, { expiresIn: "7d" });
      response.cookie("authCookie", jwt, { httpOnly: true, sameSite: "lax", maxAge: 1000 * 60 * 60 * 24 * 7 });
      if (hash === user.hash) {
        response.json({ success: true });
        return;
      }
    }

    response.json({ success: false });
  })
);

app.post("/api/logout", (request, response) => {
  response.clearCookie("authCookie");
  response.json({ success: true });
});

async function getUser(request: Request) {
  const cookie = request.cookies.authCookie;

  if (cookie != undefined) {
    const data = jsonwebtoken.verify(cookie, JWT_SECRET) as { uuid: string };
    const user = await db.user.findFirst({ where: { uuid: data.uuid } });
    if (user) return user;
  }

  throw new Error("You are not logged in");
}

const tagColorValidator = z.enum(["yellow", "pink", "lime", "cyan", "purple"]);
const tagValidator = z.object({
  name: z.string(),
  description: z.string(),
  color: tagColorValidator,
});

const taskStatusValidator = z.enum(["not_yet_started", "in_progress", "completed"]);

const DTOMapper = {
  tag: (tag: Tag): TagDTO => {
    return {
      color: tagColorValidator.parse(tag.color),
      description: tag.description,
      name: tag.name,
      user_uuid: tag.user_uuid,
      uuid: tag.uuid,
    };
  },
  task: (task: Task): TaskDTO => {
    return {
      description: task.description,
      due_date: task.due_date.valueOf(),
      name: task.name,
      status: taskStatusValidator.parse(task.status),
      uuid: task.uuid,
      tag_uuid: task.tag_uuid,
      user_uuid: task.user_uuid,
    };
  },
};

app.post(
  "/api/tag",
  handleAsync(async (request, response) => {
    const user = await getUser(request);
    const { color, description, name } = await tagValidator.parseAsync(request.body);

    const newTag = await db.tag.create({
      data: { color, description, name, user_uuid: user.uuid },
    });

    response.json({ tag: DTOMapper.tag(newTag) });
  })
);

app.get(
  "/api/tags",
  handleAsync(async (request, response) => {
    const user = await getUser(request);
    const tags = await db.tag.findMany({ where: { user_uuid: user.uuid }, include: { tasks: true } });

    response.json({
      tags: tags.map((tag) => {
        const tagDto = DTOMapper.tag(tag);
        const taskDtos = tag.tasks.map((task) => DTOMapper.task(task));
        return { ...tagDto, tasks: taskDtos };
      }),
    });
  })
);

app.patch(
  "/api/tag/:tag_uuid",
  handleAsync(async (request, response) => {
    const user = await getUser(request);
    const tag_uuid = request.params.tag_uuid;
    const tag = await db.tag.findFirst({ where: { user_uuid: user.uuid, uuid: tag_uuid }, include: { tasks: true } });

    if (tag) {
      const { color, description, name } = await tagValidator.parseAsync(request.body);

      const newTag = await db.tag.update({
        where: { uuid: tag.uuid },
        data: { color, description, name },
      });

      response.json({ tag: DTOMapper.tag(newTag) });
      return;
    }

    response.json({ success: false });
  })
);

app.delete(
  "/api/tag/:tag_uuid",
  handleAsync(async (request, response) => {
    const user = await getUser(request);
    const tag_uuid = request.params.tag_uuid;
    const tag = await db.tag.findFirst({ where: { user_uuid: user.uuid, uuid: tag_uuid }, include: { tasks: true } });

    if (tag) {
      await db.task.deleteMany({ where: { tag_uuid: tag.uuid } });
      await db.tag.delete({ where: { uuid: tag.uuid } });

      response.json({ success: true });
      return;
    }

    response.json({ success: false });
  })
);

const taskValidator = z.object({
  name: z.string(),
  description: z.string(),
  status: taskStatusValidator,
  due_date: z.number(),
  tag_uuid: z.string(),
});

app.post(
  "/api/task",
  handleAsync(async (request, response) => {
    const user = await getUser(request);
    const { due_date, description, name, status, tag_uuid } = await taskValidator.parseAsync(request.body);

    const newTask = await db.task.create({
      data: { name, description, status, tag_uuid, due_date: new Date(due_date), user_uuid: user.uuid },
      include: { tag: true },
    });

    response.json({ task: { ...DTOMapper.task(newTask), tag: DTOMapper.tag(newTask.tag) } });
  })
);

app.get(
  "/api/tasks",
  handleAsync(async (request, response) => {
    const user = await getUser(request);
    const tag_uuid_query = request.query["tag_uuid"];
    const tag_uuid = typeof tag_uuid_query === "string" ? tag_uuid_query : undefined;

    const tasks = await db.task.findMany({
      where: { user_uuid: user.uuid, tag_uuid },
      include: { tag: true },
    });

    response.json({
      tasks: tasks.map((task) => {
        const taskDto = DTOMapper.task(task);
        return { ...taskDto, tag: DTOMapper.tag(task.tag) };
      }),
    });
  })
);

app.patch(
  "/api/task/:task_uuid",
  handleAsync(async (request, response) => {
    const user = await getUser(request);

    const task = await db.task.findFirst({
      where: { user_uuid: user.uuid, uuid: request.params.task_uuid },
      include: { tag: true },
    });

    if (task) {
      const { description, due_date, name, status, tag_uuid } = await taskValidator.parseAsync(request.body);
      const newTask = await db.task.update({
        where: { uuid: task.uuid },
        data: { name, description, status, due_date: new Date(due_date), tag_uuid },
        include: { tag: true },
      });

      response.json({
        task: { ...DTOMapper.task(newTask), tag: DTOMapper.tag(newTask.tag) },
      });
      return;
    }

    response.json({ success: false });
  })
);

app.delete(
  "/api/task/:task_uuid",
  handleAsync(async (request, response) => {
    const user = await getUser(request);

    const task = await db.task.findFirst({
      where: { user_uuid: user.uuid, uuid: request.params.task_uuid },
      include: { tag: true },
    });

    if (task) {
      await db.task.delete({ where: { uuid: task.uuid } });
      response.json({ success: true });
      return;
    }

    response.json({ success: false });
  })
);

app.post(
  "/api/whoami",
  handleAsync(async (request, response) => {
    try {
      const user = await getUser(request);
      response.json({ user: { uuid: user.uuid, username: user.username } });
    } catch (err) {
      response.json({ user: null });
    }
  })
);

app.use("*", (request, response) => response.status(404).json({ success: false }));
app.use((err, request, response, next) => {
  console.error(err);
  response.status(500).json({ success: false });
});

app.listen(4000, () => console.log("Server has started"));
