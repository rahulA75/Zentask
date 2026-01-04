# Panze Studio - Project Management Dashboard

A modern SaaS project management dashboard with a clean, minimal aesthetic built with Next.js 16, React 19, and TypeScript. Features authentication, role-based access, and comprehensive project tracking tools.

## ✨ Key Features

### 🔐 Authentication System
- **Login Screen**: Glassmorphism design with gradient backgrounds
- **Registration Screen**: Role selection (Manager/Employee) during signup
- **Role-Based Access**: Differentiate between manager and employee accounts
- **Demo Accounts**:
  - Manager: `manager@panze.studio`
  - Employee: `employee@panze.studio`

### 🎨 Modern SaaS UI Design
- **Clean Minimal Aesthetic**: Off-white background (#F7F9FB)
- **Glassmorphism**: Backdrop blur effects with transparency
- **Soft Shadows**: Subtle elevation throughout
- **Rounded Cards**: 16-20px border radius
- **Premium Design**: Dribbble/Behance quality UI
- **Professional Typography**: Similar to Inter/SF Pro/Poppins
- **Responsive Layout**: Optimized for 1440px desktop width

### 📊 Dashboard Components

#### Top Header
- **Logo**: panze studio branding
- **Filter Pills**: Today, This Week, This Month selectors
- **Search Bar**: "Search Task, Meeting, Projects…"
- **Notifications**: Bell icon with notification badge
- **User Profile**: Avatar with name and role display

#### Left Sidebar
- **Icon Navigation**: Vertical pill-style icons
- **Active State**: Dark background highlight
- **Navigation Items**:
  - Dashboard
  - Tasks
  - Calendar
  - Files
  - Messages
  - Settings
- **Logout Button**: Red hover state

#### Main Content Area

**Left Column - My Tasks**
- Today/Tomorrow tabs
- Task status dropdown
- Task cards with:
  - Project icons
  - Task titles
  - Short descriptions
  - Soft pastel backgrounds for active tasks

**Center Column - Analytics**

1. **Projects Overview (Donut Chart)**
   - In Progress: 14 (Orange)
   - Completed: 32 (Blue)
   - Not Started: 54 (Gray)
   - Minimal flat chart style

2. **Income vs Expense (Line Chart)**
   - Blue line: Income ($24,600)
   - Orange line: Expense ($13,290)
   - Monthly data from Jan to Jul
   - Smooth curves with subtle grid lines

3. **Invoice Overview (Progress Bars)**
   - Overdue (Purple): $5,420
   - Not Paid (Red): $8,730
   - Paid (Green): $12,890
   - Horizontal progress bars with percentages

**Right Column - Engagement**

1. **My Meetings**
   - Meeting title
   - Project name
   - Time display
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

1. **Login/Register**: Users start at the authentication screen
2. **Role Selection**: During registration, users choose Manager or Employee role
3. **Dashboard Access**: After authentication, users see the main dashboard
4. **Role-Based Features**: Dashboard adapts based on user role
5. **Logout**: Users can logout from the sidebar

## 🎨 Design Principles

### Visual Hierarchy
- **Bold headings** for section titles
- **Medium weight** for labels and important text
- **Light weight** for descriptions and secondary information

### Spacing & Layout
- Generous white space between elements
- Consistent padding (24-32px for cards)
- Clean grid system with proper alignment

### Interactive Elements
- Smooth transitions on hover states
- Clear active states for selected items
- Subtle shadows that elevate on interaction

### Typography Scale
- **Page Title**: 3xl (30px) - Bold
- **Card Title**: lg (18px) - Bold
- **Body Text**: sm (14px) - Medium
- **Labels**: xs (12px) - Regular

## 🔧 Customization

### Adding New Dashboard Widgets

1. Create your component in the main content area
2. Follow the card styling pattern:
```tsx
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
  {/* Your content */}
</div>
```

### Modifying Color Scheme

Update the color values in the component:
- Primary colors: Update gradient classes
- Chart colors: Modify the data arrays
- Background: Change the `bg-[#F7F9FB]` class

### Adding Navigation Items

Add to the sidebar nav array:
```tsx
{ id: 'new-item', icon: 'SVG_PATH_DATA' }
```

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

## 🎯 Key Features Breakdown

### Authentication
- Glassmorphism login/register screens
- Role selection during registration
- Demo account support
- Smooth transitions between views

### Dashboard Layout
- Fixed top header with search
- Icon-only sidebar navigation
- Three-column responsive grid
- Sticky header for scroll persistence

### Data Visualization
- Donut charts for project overview
- Line charts for financial tracking
- Progress bars for invoice status
- Clean, minimal chart styling

### Task Management
- Today/Tomorrow tab switching
- Status filtering dropdown
- Visual task cards with project icons
- Active task highlighting

### Meetings & Tickets
- Meeting list with platform indicators
- Ticket cards with user avatars
- Action buttons for quick access
- Clean, organized layout

## 🚀 Performance

- Server-side rendering with Next.js
- Optimized bundle size
- Fast page transitions
- Efficient chart rendering with Recharts

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Security Features

- Role-based authentication
- Secure password handling (in production, use proper encryption)
- Session management
- Protected routes

## 🎯 Future Enhancements

- Real-time notifications
- Task assignment functionality
- Team collaboration features
- Advanced filtering and search
- Dark mode toggle
- Mobile responsive layouts
- Calendar integration
- File upload and management
- Email notifications
- Advanced reporting
- Export functionality
- Integration with third-party tools

## 📄 License

This project is for demonstration purposes.

## 👥 Credits

Designed and developed as a modern SaaS dashboard template inspired by premium UI/UX patterns from Dribbble and Behance.
