# AngularTaskManager

A simple Task Manager application built using Angular and Bootstrap.

Users can:
- Add tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All / Completed / Pending)

---

#  Project Setup (Step-by-Step Guide)



##  Step 1 — Clone the repository

git clone https://github.com/prasannakumar50/task-manager-assignment.git

## Step 2 (Navigate to Angular project)
cd angular-task-manager


## Step 3 (Install dependencies)
npm install



## Step 4 (Start development server)
ng serve


## Step 5 (Run unit tests)
ng test


## Features Implemented

- Add new task
- Delete task
- Toggle complete
- Filter tasks
- Responsive layout
- Service-based state management
- Unit tests




## Architecture Explanation Components

UI is split into small reusable components.

TaskService
Handles:
 - Add
 - Delete
 - Filter

This keeps logic separate from UI.




## Testing 
ng test
Unit tests focus on:
TaskService logic




