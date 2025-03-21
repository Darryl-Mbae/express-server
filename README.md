# Express Server Starter

A simple Express server setup with **Nodemon**, **ESLint**, **dotenv**, **Redis**, and **Prisma** for easy development and production use.

## Features

- **Express.js** - Fast, unopinionated, and minimalist web framework for Node.js
- **Nodemon** - Automatically restarts the server during development
- **ESLint** - Ensures consistent code formatting and style
- **Dotenv** - Manages environment variables for local and production environments
- **Redis** - Used for caching and session management
- **Prisma ORM** - Modern database toolkit for PostgreSQL, MySQL, or SQLite
- **Modular Structure** - Organized into `middleware`, `routes`, `controllers`, `models`, etc.

## Folder Structure

```
server/
├── config/                   # Configuration files
├── controllers/              # Business logic for routes
├── middleware/               # Custom middleware
├── routes/                   # Route handlers
├── .env.development.local    # Local environment variables
├── .env.production.local     # Production environment variables
├── .gitignore                # Git ignored files (e.g., node_modules, .env)
├── app.js                    # Main entry point
├── eslint.config.js          # ESLint configuration
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file


```
# Installation Guide

Follow these steps to set up and run the project on your local machine.

### 1. Create a New Project with Degit
```sh
npx degit Darryl-Mbae/express-server server
```

### 2. Change Directory
```sh
cd server
```
### 3.  Install Dependencies
```sh
npm install
```

### 4.  Set Up Environment Variables
e.g.
```sh
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
REDIS_URL=redis://localhost:6379
```
### 4.  Set Up Prisma
Generate Prisma client:
```sh
npx prisma generate
```
Apply migrations to the database:
```sh
npx prisma migrate dev
```

### 5.  Run the Server
For development (auto-restarts with Nodemon):
```sh
npm run dev
```
For production
```sh
npm start
```
