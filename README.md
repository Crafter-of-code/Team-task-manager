# Team Task Manager

A full-stack collaborative task management web application built using Next.js and Node.js. It allows teams to create projects, assign tasks, manage members, and track progress efficiently in a structured workflow system.

---

## Overview

Team Task Manager is designed to simulate real-world project management tools where:

- Admins manage projects and team members
- Members handle assigned tasks
- Tasks move through different stages (To Do, In Progress, Done)

This project demonstrates full-stack development skills including authentication, role-based access, REST APIs, and database design.

---

## Tech Stack

### Frontend

- Next.js
- React.js
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT (JSON Web Token)
- bcrypt.js

### Deployment

- Railway

---

## Project Structure

```bash
team-task-manager/
│
├── frontend/ (Next.js App)
│ ├── app/
│ ├── components/
│ ├── context/
│ ├── services/
│ └── public/
│
├── backend/ (Node.js API)
│ ├── controllers/
│ ├── models/
│ ├── db/
│ ├── routes/
│ ├── middleware/
│ └── index.js
│
└── README.md
```

---

## Authentication System

- User Signup with name, email, password
- Secure login using JWT
- Password hashing using bcrypt
- Protected routes using middleware

---

## User Roles

### Admin

- Create and manage projects
- Add/remove team members
- Create and assign tasks
- Manage all project data

### Member

- View assigned projects
- Update task status
- Track assigned work

---

## Core Features

### Project Management

- Create projects
- Add team members
- Assign roles

### Task Management

- Create tasks with title, description, priority, due date
- Assign tasks to users
- Update task status

### Dashboard

- Total tasks overview
- Tasks by status
- Overdue tasks tracking
- User-wise task distribution

---
