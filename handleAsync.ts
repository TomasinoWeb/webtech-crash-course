import { NextFunction, Request, Response } from "express";

type Handler = (request: Request, response: Response, next: NextFunction) => Promise<void>;
export const handleAsync =
  (cb: Handler): Handler =>
  (request, response, next) =>
    cb(request, response, next).catch((err) => next(err));
