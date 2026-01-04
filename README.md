# Panze Studio - Project Management Dashboard

A modern SaaS project management dashboard with clean, minimal aesthetic built with Next.js 16, React 19, and TypeScript. Features **role-based authentication**, **task assignment**, and **comprehensive reporting** with differentiated views for managers and employees.

## ✨ Key Features

### 🔐 Authentication System
- **Login Screen**: Glassmorphism design with gradient backgrounds
- **Registration Screen**: Role selection (Manager/Employee) during signup
- **Role-Based Access**: Complete separation between manager and employee views
- **Demo Accounts**:
  - Manager: `manager@panze.studio`
  - Employee: `sarah@panze.studio`

### 👥 Role-Based Functionality

#### **Manager Features**
- ✅ View **all tasks** across the entire team
- ✅ Assign tasks to **any team member**
- ✅ Assign tasks to **themselves**
- ✅ See **team-wide reports** and analytics
- ✅ View **task distribution by team member** (bar chart)
- ✅ Monitor **all employees' progress**
- ✅ Access complete project overview

#### **Employee Features**
- ✅ View **only their own tasks**
- ✅ Assign tasks **to themselves**
- ✅ See **personal reports** and statistics
- ✅ View **their own income/expense** data
- ✅ Track **personal task completion**
- ✅ Monitor **individual progress**

### 📋 Task Assignment
- **Full Task Creation Form**: Title, description, project name, priority, assignee
- **Priority Levels**: Low, Medium, High
- **Dynamic Assignee Selection**:
  - Managers: Can assign to themselves or any team member
  - Employees: Can only assign to themselves
- **Real-time Updates**: Tasks appear immediately on dashboard
- **Status Tracking**: To-Do, In Progress, Completed

### 📊 Dashboard Components

#### Top Header
- **Logo**: panze studio branding
- **Filter Pills**: Today, This Week, This Month selectors
- **Search Bar**: "Search Task, Meeting, Projects…"
- **Notifications**: Bell icon with notification badge
- **User Profile**: Avatar with name and role display
- **Assign Task Button**: Quick access to task creation

#### Left Sidebar
- **Icon Navigation**: Vertical pill-style icons
- **Active State**: Dark background highlight
- **Navigation Items**: Dashboard, Tasks, Calendar, Files, Messages, Settings
- **Logout Button**: Red hover state for easy sign-out

#### Main Content Area

**Left Column - Task List**
- Dynamic title based on role (All Tasks / My Tasks)
- Today/Tomorrow tabs
- Task status dropdown filter
- Task cards with:
  - Project icons
  - Task titles & descriptions
  - Status-based color coding
  - Assignee info (for managers)

**Center Column - Analytics & Reports**

1. **Task Stats Summary (4 Cards)**
   - Total Tasks
   - To Do count
   - In Progress count
   - Completed count

2. **Task Status Chart (Donut)**
   - Visual breakdown of task statuses
   - Color-coded segments
   - Shows: In Progress, Completed, Not Started

3. **Priority Distribution (Donut)**
   - Task priority breakdown
   - High, Medium, Low priorities
   - Color-coded by urgency

4. **Role-Specific Chart**
   - **Managers**: Task Distribution by Team Member (Bar Chart)
     - Shows workload across all team members
     - Identifies task allocation patterns
   - **Employees**: Income vs Expense (Line Chart)
     - Personal financial tracking
     - Monthly trend visualization

5. **Invoice Overview (Progress Bars)**
   - Overdue (Purple): $5,420
   - Not Paid (Red): $8,730
   - Paid (Green): $12,890

**Right Column - Engagement**

1. **My Meetings**
   - Meeting titles
   - Project associations
   - Time displays
   - Platform icons (Meet/Zoom)
   - "See All Meetings" link

2. **Open Tickets**
   - User avatars
   - User names
   - Message previews
   - "Check" action buttons

### 🎯 Color Palette
- **Primary Dark**: #1E1E1E (Charcoal)
- **Accent Blue**: #5B8DEF
- **Accent Orange**: #FF9F43
- **Accent Purple**: #A855F7
- **Accent Red**: #EF4444
- **Accent Green**: #22C55E
- **Background**: #F7F9FB (Off-white)
- **Neutral Grays**: Various shades for hierarchy

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts 3.6.0
- **Linting**: ESLint with Next.js config

## 📱 Application Flow

### Authentication Flow
1. **Login/Register**: Users start at authentication screen
2. **Role Selection**: During registration, users choose Manager or Employee role
3. **Dashboard Access**: After login, users see role-appropriate dashboard
4. **Task Assignment**: Click "Assign Task" button to create new tasks
5. **Role-Based Filtering**: System automatically filters data based on user role
6. **Logout**: Users can sign out from the sidebar

### Manager Workflow
1. Login as manager
2. View all team tasks on dashboard
3. Click "Assign Task" to create new task
4. Assign to team member or self
5. View team-wide reports and task distribution
6. Monitor overall project progress

### Employee Workflow
1. Login as employee
2. View only personal tasks
3. Click "Assign Task" to create self-assigned task
4. Complete tasks and update status
5. View personal reports and progress
6. Track individual achievements

## 🎨 Design Principles

### Visual Hierarchy
- **Bold headings** for section titles
- **Medium weight** for labels and important text
- **Light weight** for descriptions and secondary information

### Spacing & Layout
- Generous white space between elements
- Consistent padding (24-32px for cards)
- Clean grid system with proper alignment
- Responsive three-column layout

### Interactive Elements
- Smooth transitions on hover states
- Clear active states for selected items
- Subtle shadows that elevate on interaction
- Gradient buttons with hover effects

### Typography Scale
- **Page Title**: 3xl (30px) - Bold
- **Card Title**: lg (18px) - Bold
- **Body Text**: sm (14px) - Medium
- **Labels**: xs (12px) - Regular

## 🔐 Role-Based Security

### Data Filtering
- **Manager Access**: All tasks in system (`allTasks`)
- **Employee Access**: Filtered tasks (`task.assignedTo === currentUser.id`)
- **Report Scope**: 
  - Managers see team-wide statistics
  - Employees see only personal statistics

### UI Adaptation
- Dashboard titles change based on role
- Chart types differ for managers vs employees
- Assignee dropdowns show appropriate options
- Task cards display different information

## 📊 Data Structure

### User Interface
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'manager' | 'employee';
  avatar: string;
}
```

### Task Interface
```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  project: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
  assignedBy: string;
  createdAt: Date;
  dueDate: Date;
}
```

### Meeting Interface
```typescript
interface Meeting {
  id: string;
  title: string;
  time: string;
  platform: 'meet' | 'zoom';
  projectName: string;
}
```

## 🎯 Key Differentiators

### Manager vs Employee Dashboards

| Feature | Manager | Employee |
|---------|---------|----------|
| **Task Visibility** | All team tasks | Only own tasks |
| **Task Assignment** | To anyone + self | Only to self |
| **Report Scope** | Team-wide | Personal only |
| **Charts** | Task distribution by team | Income vs Expense |
| **Dashboard Title** | "Manager Dashboard" | "My Dashboard" |
| **Task List Title** | "All Tasks" | "My Tasks" |

## 🔧 Customization

### Adding New Team Members

Update the `allUsers` array:
```typescript
const allUsers = [
  { id: '5', name: 'New Employee', email: 'new@panze.studio', role: 'employee', avatar: 'NE' }
];
```

### Modifying Task Statuses

Update status types in Task interface and add corresponding UI colors.

### Changing Color Scheme

Update color values throughout the component and in chart data arrays.

## 🚀 Performance

- Server-side rendering with Next.js
- Optimized bundle size
- Fast page transitions
- Efficient chart rendering with Recharts
- Role-based data filtering for performance

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Security Features

- Role-based authentication
- Secure password handling
- Session management
- Protected routes
- Data filtering by user role
- Prevents unauthorized access

## 🎯 Future Enhancements

- Real-time notifications
- Task status updates
- Team collaboration features
- Advanced filtering and search
- Dark mode toggle
- Mobile responsive layouts
- Calendar integration
- File upload and management
- Email notifications
- Advanced reporting
- Export functionality (PDF, CSV)
- Task comments and attachments
- Time tracking
- Project milestones
- Team chat integration

## 📄 License

This project is for demonstration purposes.

## 👥 Credits

Designed and developed as a modern SaaS dashboard template with complete role-based access control, inspired by premium UI/UX patterns from Dribbble and Behance.

---

## 📖 Quick Start Guide

### Testing Manager Features
1. Login with: `manager@panze.studio`
2. Click "Assign Task" button
3. Select any team member as assignee
4. View team-wide task distribution chart
5. See all tasks from all team members

### Testing Employee Features
1. Login with: `sarah@panze.studio`
2. Click "Assign Task" button
3. Can only assign to "Myself"
4. View only personal tasks and statistics
5. See income vs expense chart

### Creating New Tasks
1. Click "Assign Task" button in header
2. Fill in:
   - Task Title
   - Description
   - Project Name
   - Priority (Low/Medium/High)
   - Assignee (role-dependent options)
3. Click "Assign Task"
4. Return to dashboard to see new task

**Note**: The system automatically filters all data based on the logged-in user's role, ensuring complete separation between manager and employee views.
