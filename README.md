## WebTech Crash Course

This repository contains all the code written for the front-end and back-end crash courses across three branches.

 - `main` (you are here) - This only contains the code for the front-end of the application, without back-end integrations.
 - `fullstack` - This contains the code for the front-end WITH back-end integrations.
 - `backend` - This branch contains code for the back-end of the app.

The front-end is written in TypeScript and Next.js, using Tailwind CSS for the styles.

The back-end is written in TypeScript and Express.

**Running the application:**
 - Clone this repository using `git clone https://github.com/tomasinoweb/webtech-crash-course`
 - Switch to the branch that you want to check using `git checkout <branch_name>`
 - Install the dependencies by running `npm install` or `yarn`
 - If you're in the `backend` branch, you need to initialize prisma by running `yarn migrate`
 - Start the server by running 
   - `npm run dev` or `yarn dev` when in the `main` or `fullstack` branch, or 
   - `npm start` or `yarn start` when in the `backend` branch