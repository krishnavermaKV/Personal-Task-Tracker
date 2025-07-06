# 🚀 Personal Task Tracker

A simple and responsive task management web application built with React, Tailwind CSS, and Vite. You can add, edit, delete, complete, and filter tasks — all stored in your browser using `localStorage`.

> ⚠️ **Note:** This application is **not live hosted**.  
> You can run it locally via:
> - `npm run dev` (for development), or  
> - Docker (production build)

---

## 📖 Description

This web application lets users:
- Log in using just a username
- Add tasks with title and optional description
- Mark tasks as completed
- Edit or delete tasks
- Filter tasks by status (All, Completed, Pending)
- View task creation date
- Store all data in the browser using `localStorage`

---

## ✨ Features

- 🔐 Local login (username saved in browser)
- ➕ Add new tasks with optional description
- ✅ Mark tasks as complete
- 📝 Edit and delete tasks
- 🔍 Filter tasks: All / Completed / Pending
- 📅 Creation date shown for each task
- 💾 Data saved in `localStorage`
- 📱 Mobile-responsive layout (Tailwind CSS)

---

## 🧱 Tech Stack

- React.js
- React Router DOM
- Tailwind CSS
- localStorage API
- Vite (build tool)
- Docker (for containerized deployment)

---

## 📦 Getting Started Locally (Development Mode)

```bash
# 1. Clone the repository
git clone https://github.com/your-username/personal-task-tracker.git
cd personal-task-tracker

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# App runs at:
http://localhost:5173

--- 

## Getting Started By Using Docker 
# 1. Run This command 
docker run -p 3000:3000 pkriya/personal_task_tracker

# App runs at: when it Run using docker
http://localhost:3000