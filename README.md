# cadastro_de_usuarios

Simple full-stack user registration/study project with:
- `client/`: HTML/CSS/JS pages
- `server/`: Node.js + TypeScript + Express + PostgreSQL API

## Project Status

This project is still a **Work in Progress (WIP)**.

Some parts are under active development and may change (routes, response shapes, frontend flows, and data handling).

## Tech Stack

- Node.js
- TypeScript
- Express
- PostgreSQL (`pg`)
- Vanilla HTML/CSS/JavaScript

## Requirements

- Node.js 18+ (recommended)
- npm
- PostgreSQL database

## Environment Variables

Create a `.env` file in the project root with:

```env
PORT=3000
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DATABASE
```

## Database Model

Current backend queries expect a PostgreSQL table named `public."user"` with these fields:

- `id` (integer)
- `name` (text)
- `age` (integer)
- `job` (text)
- `register` (integer)

Suggested SQL:

```sql
CREATE TABLE IF NOT EXISTS public."user" (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 0),
  job TEXT NOT NULL,
  register INTEGER NOT NULL
);
```

Optional seed example:

```sql
INSERT INTO public."user" (id, name, age, job, register) VALUES
  (1001, 'Alice Carter', 29, 'Software Engineer', 2020),
  (1002, 'Bruno Lima', 34, 'Product Manager', 2018),
  (1003, 'Carla Souza', 26, 'UX Designer', 2022),
  (1004, 'Daniel Rocha', 41, 'Data Analyst', 2016);
```

## Install

```bash
npm install
```

## Run (Development)

```bash
npm run start:dev
```

Or with file watch:

```bash
npm run start:watch
```

Server base URL:
- `http://localhost:3000` (or your `PORT`)

## API Routes

Base route: `/api/users`

- `GET /api/users/` -> list all users
- `GET /api/users/id/:id` -> find user by id
- `GET /api/users/name/:name` -> find user by name
- `POST /api/users/` -> create user
- `PATCH /api/users/` -> update user
- `DELETE /api/users/:id` -> delete user

## Frontend Pages

Main static files are in `client/public/`:
- `index.html`
- `users.html`
- `register_user.html`
- `edit_user.html`

## Notes

- CORS is enabled in the backend app.
- This repository is primarily for learning and incremental improvements.
