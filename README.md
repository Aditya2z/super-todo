# super-todo

Super-Todo is a full-stack MERN learning project built with a monorepo structure to simulate real-world development. It goes beyond a simple todo app by focusing on clean architecture, GitHub-driven workflow, and shared code practices.

# Super-Todo 📝

A full-stack MERN project to learn end-to-end development workflow — from setup to deployment.  
Every step is tracked via GitHub Issues + Project Board + this README task list.

## 🤔 Why Monorepo?

Super-Todo is structured as a **monorepo** using [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces).  
This approach is inspired by how companies like **Vercel (Next.js)**, **Meta (React)**, and **Shopify (Polaris)** organize their large projects.

### Benefits:

- **Single repo for everything** → backend (`api`), frontend (`web`), and shared code (`packages/*`) live together.
- **Shared dependencies** → one `node_modules` at the root, avoiding duplication and version mismatches.
- **Code reusability** → utilities, validation, and configs can be shared across apps.
- **Consistent updates** → changes in shared code are instantly available to both frontend & backend.
- **Professional setup** → demonstrates industry-standard practices (as seen in Next.js, React, and Shopify).

This makes it easier to scale and maintain real-world applications while showcasing modern engineering practices to potential employers.

---

## 📌 Project Setup Steps

### Step 1 — Create Repository

- [x] Create new repo on GitHub → `super-todo`
- [x] Initialize with `README.md`
- [x] Clone repo locally

### Step 2 — Setup GitHub Project Board

- [x] Create **Project** → “Super-Todo Roadmap”
- [x] Select **Board** template
- [x] Keep only 3 columns → Todo, In Progress, Done
- [x] Create issues for roadmap items

### Step 3 — Monorepo Structure

- [ ] Initialize npm workspaces in root `package.json`
- [ ] Create `apps/api` and `apps/web` folders
- [ ] Create `packages` folder for shared code (future use)
- [ ] Commit + push → close issue

### Step 4 — Express API

- [ ] Setup `apps/api` with Express
- [ ] Add `/api/health` endpoint
- [ ] Test locally with `curl` or Postman
- [ ] Commit + push → close issue

### Step 5 — React Web App

- [ ] Setup `apps/web` with Vite (React + JavaScript)
- [ ] Add homepage with “Super-Todo” header
- [ ] Fetch and display API health endpoint
- [ ] Commit + push → close issue

### Step 6 — Connect API + Web

- [ ] Call API from frontend
- [ ] Show live data on page
- [ ] Commit + push → close issue

### Step 7 — CRUD Features

- [ ] Backend: CRUD endpoints (Create, Read, Update, Delete todos)
- [ ] Frontend: UI for managing todos
- [ ] State sync with API
- [ ] Commit + push → close issue

### Step 8 — Polish & Docs

- [ ] Improve UI/UX
- [ ] Add screenshots in README
- [ ] Write setup instructions
- [ ] (Optional) Deploy to Vercel/Render/Heroku
- [ ] Commit + push → close issue

---
