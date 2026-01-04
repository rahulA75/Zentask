# Task Management System

A comprehensive task management application built with Next.js 16, React 19, and TypeScript featuring a modern glassmorphism UI design where managers can assign tasks to employees and themselves, and view detailed reports with interactive charts.

## ✨ Features

### 1. Modern UI Design
- **Glassmorphism Effects**: Backdrop blur with transparency for a modern, layered appearance
- **Gradient Accents**: Beautiful color gradients throughout the interface
- **Smooth Animations**: Hover effects, transitions, and scale transforms
- **Dark Mode Support**: Fully responsive dark mode theme
- **Responsive Layout**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Icon Integration**: SVG icons for better visual communication

### 2. Task Assignment
- **Assign to Employees**: Managers can assign tasks to any employee in their team
- **Self-Assignment**: Managers can assign tasks to themselves with clear indicators
- **Priority Levels**: 
  - 🔴 High Priority
  - 🟡 Medium Priority
  - 🟢 Low Priority
- **Task Details**: Each task includes:
  - Title
  - Description
  - Assignee
  - Priority level
  - Status (Pending, In Progress, Completed)
  - Creation date

### 3. Advanced Report Dashboard

#### Statistics Cards with Gradient Backgrounds
- **Total Tasks**: Overall task count with blue gradient
- **Pending Tasks**: Yellow gradient card
- **In Progress Tasks**: Orange gradient card
- **Completed Tasks**: Green gradient card
- **Self-Assigned Tasks**: Purple gradient card for manager's own tasks

#### Interactive Charts (Powered by Recharts)
- **Task Status Distribution (Pie Chart)**
  - Visual breakdown of task statuses
  - Percentage labels for each segment
  - Color-coded by status type

- **Tasks by Team Member (Bar Chart)**
  - Shows task distribution across team members
  - Gradient-filled bars
  - Includes manager's self-assigned tasks

- **Priority Distribution (Pie Chart)**
  - Visualizes task priority breakdown
  - High, Medium, and Low priority segments
  - Color-coded by priority level

- **Task Creation Trend (Line Chart)**
  - Timeline of task creation
  - Shows cumulative task growth
  - Helps identify task creation patterns

#### Enhanced Task List
- Visual priority indicators (colored emoji)
- Gradient status badges
- Glassmorphism card design
- Hover effects for better interaction
- Self-assigned task highlighting
- Formatted date display
- Priority level tags

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Gradient Backgrounds**: Multi-color gradients throughout the UI
- **Smooth Transitions**: All interactive elements have smooth animations
- **Modern Typography**: Bold, gradient text for headings
- **Card Hover Effects**: Cards scale and enhance shadows on hover
- **Color Coding**: Consistent color scheme for task statuses and priorities
- **Responsive Grid Layouts**: Adapts to different screen sizes

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Charts**: Recharts 2.x
- **Linting**: ESLint

## 📁 Project Structure

```
/app
  ├── page.tsx        # Main application component with task management logic
  ├── layout.tsx      # Root layout
  └── globals.css     # Global styles
```

## 🎯 Usage

### Assigning a Task

1. Navigate to the "Assign Task" view (default view)
2. Fill in the task title and description
3. Select an assignee from the dropdown:
   - Choose "🎯 Myself" to assign the task to yourself
   - Choose an employee name to assign to that employee
4. Select priority level (Low, Medium, or High)
5. Click "Assign Task" button

### Viewing Reports

1. Click the "View Report" button in the navigation
2. View the enhanced statistics cards showing:
   - Total number of tasks
   - Tasks by status (Pending, In Progress, Completed)
   - Number of self-assigned tasks
3. Explore the interactive charts:
   - Hover over chart elements to see detailed tooltips
   - Analyze task distribution patterns
   - Monitor team workload
   - Track task creation trends
4. Scroll down to see a detailed list of all tasks
5. Self-assigned tasks are highlighted with a purple "Self" badge

## 📊 Chart Features

### Task Status Distribution
- Pie chart showing percentage breakdown
- Interactive tooltips
- Color-coded segments

### Tasks by Team Member
- Bar chart with gradient fills
- Shows workload distribution
- Includes manager and all team members

### Priority Distribution
- Pie chart showing priority levels
- Helps identify task urgency patterns
- Red for high, amber for medium, green for low

### Task Creation Trend
- Line chart showing task creation over time
- Cumulative view of tasks
- Helps track project activity

## 🔍 Features in Detail

### Manager Capabilities
- Create and assign tasks to team members
- Assign tasks to themselves (self-assignment feature)
- Track all tasks and their statuses
- View comprehensive reports and statistics
- Monitor team workload distribution
- Analyze task priorities and trends

### Task Status Types
- **Pending**: Newly created tasks (Yellow badge)
- **In Progress**: Tasks currently being worked on (Orange badge)
- **Completed**: Finished tasks (Green badge)

### Priority Levels
- **High Priority**: Urgent tasks requiring immediate attention (🔴)
- **Medium Priority**: Standard tasks (🟡)
- **Low Priority**: Tasks that can be addressed later (🟢)

### Self-Assignment Tracking
The system specifically tracks and highlights tasks that managers assign to themselves:
- Purple gradient badges in statistics
- "Self" indicator on task cards
- Dedicated self-assigned tasks counter
- Visual highlighting in task lists

## 🎨 UI Components

- **Glassmorphism Cards**: Frosted glass effect with backdrop blur
- **Gradient Buttons**: Smooth color transitions
- **Icon-Enhanced Headers**: SVG icons for better visual hierarchy
- **Responsive Charts**: Auto-sizing charts that work on all devices
- **Animated Transitions**: Smooth hover and scale effects
- **Status Badges**: Color-coded, gradient-filled status indicators

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🧪 Linting

To run ESLint:

```bash
npm run lint
```

## 📝 License

This project is for demonstration purposes.

## 🎯 Future Enhancements

Potential features for future versions:
- Task editing and deletion
- Task status updates
- User authentication
- Database integration
- Real-time collaboration
- Email notifications
- Task comments and attachments
- Export reports as PDF
- Advanced filtering and sorting
- Task templates
