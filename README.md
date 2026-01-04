# Task Management System

A comprehensive task management application built with Next.js 16, React 19, and TypeScript where managers can assign tasks to employees and themselves, and view detailed reports.

## Features

### 1. Task Assignment
- **Assign to Employees**: Managers can assign tasks to any employee in their team
- **Self-Assignment**: Managers can assign tasks to themselves
- **Task Details**: Each task includes:
  - Title
  - Description
  - Assignee
  - Status (Pending, In Progress, Completed)
  - Creation date

### 2. Report Dashboard
- **Task Statistics**:
  - Total Tasks
  - Pending Tasks
  - In Progress Tasks
  - Completed Tasks
  - Self-Assigned Tasks (tasks assigned to manager themselves)

- **Task List View**:
  - View all tasks in a organized list
  - Color-coded status badges
  - Highlight self-assigned tasks
  - Sort by creation date

### 3. User Interface
- Clean, modern design with dark mode support
- Responsive layout that works on all devices
- Intuitive navigation between Assign Task and Report views
- Visual indicators for task status and self-assigned tasks

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Linting**: ESLint

## Project Structure

```
/app
  ├── page.tsx        # Main application component with task management logic
  ├── layout.tsx      # Root layout
  └── globals.css     # Global styles
```

## Usage

### Assigning a Task

1. Navigate to the "Assign Task" view (default view)
2. Fill in the task title and description
3. Select an assignee from the dropdown:
   - Choose "Myself" to assign the task to yourself
   - Choose an employee name to assign to that employee
4. Click "Assign Task" button

### Viewing Reports

1. Click the "View Report" button in the navigation
2. View statistics cards showing:
   - Total number of tasks
   - Tasks by status (Pending, In Progress, Completed)
   - Number of self-assigned tasks
3. Scroll down to see a detailed list of all tasks
4. Self-assigned tasks are highlighted in purple for easy identification

## Features in Detail

### Manager Capabilities
- Create and assign tasks to team members
- Assign tasks to themselves (self-assignment feature)
- Track all tasks and their statuses
- View comprehensive reports and statistics

### Task Status Types
- **Pending**: Newly created tasks
- **In Progress**: Tasks currently being worked on
- **Completed**: Finished tasks

### Self-Assignment Tracking
The system specifically tracks and highlights tasks that managers assign to themselves, making it easy to see which tasks the manager has taken on directly.

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Linting

To run ESLint:

```bash
npm run lint
```

## License

This project is for demonstration purposes.
