'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'manager' | 'employee';
  avatar: string;
}

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

interface Meeting {
  id: string;
  title: string;
  time: string;
  platform: 'meet' | 'zoom';
  projectName: string;
}

interface Ticket {
  id: string;
  userName: string;
  userAvatar: string;
  message: string;
  timestamp: Date;
}

export default function Home() {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'dashboard'>('login');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'today' | 'tomorrow'>('today');
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month'>('month');
  const [activeNav, setActiveNav] = useState('dashboard');
  
  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRole, setRegisterRole] = useState<'manager' | 'employee'>('employee');

  const handleLogin = () => {
    setCurrentUser({
      id: '1',
      name: 'John Smith',
      email: loginEmail,
      role: loginEmail.includes('manager') ? 'manager' : 'employee',
      avatar: 'JS'
    });
    setCurrentView('dashboard');
  };

  const handleRegister = () => {
    setCurrentUser({
      id: '2',
      name: registerName,
      email: registerEmail,
      role: registerRole,
      avatar: registerName.split(' ').map(n => n[0]).join('').toUpperCase()
    });
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
  };

  // Sample data
  const tasks: Task[] = [
    {
      id: '1',
      title: 'BrightBridge',
      description: 'Website Design',
      project: 'BrightBridge',
      status: 'in-progress',
      priority: 'high',
      assignedTo: '1',
      createdAt: new Date('2024-01-10'),
      dueDate: new Date('2024-01-11')
    },
    {
      id: '2',
      title: 'Github',
      description: 'Upload Dev Files & Images',
      project: 'Github',
      status: 'todo',
      priority: 'medium',
      assignedTo: '1',
      createdAt: new Date('2024-01-10'),
      dueDate: new Date('2024-01-12')
    }
  ];

  const meetings: Meeting[] = [
    { id: '1', title: 'Design Review', time: '10:00 AM', platform: 'meet', projectName: 'BrightBridge' },
    { id: '2', title: 'Sprint Planning', time: '2:00 PM', platform: 'zoom', projectName: 'Github' },
    { id: '3', title: 'Client Call', time: '4:30 PM', platform: 'meet', projectName: 'Client Portal' }
  ];

  const tickets: Ticket[] = [
    { id: '1', userName: 'Sarah Johnson', userAvatar: 'SJ', message: 'Need help with deployment issue...', timestamp: new Date() },
    { id: '2', userName: 'Mike Wilson', userAvatar: 'MW', message: 'Question about API integration...', timestamp: new Date() }
  ];

  const projectsData = [
    { name: 'In Progress', value: 14, color: '#FF9F43' },
    { name: 'Completed', value: 32, color: '#5B8DEF' },
    { name: 'Not Started', value: 54, color: '#E0E0E0' }
  ];

  const incomeExpenseData = [
    { month: 'Jan', income: 20000, expense: 12000 },
    { month: 'Feb', income: 22000, expense: 13000 },
    { month: 'Mar', income: 21000, expense: 12500 },
    { month: 'Apr', income: 23000, expense: 13500 },
    { month: 'May', income: 24000, expense: 13000 },
    { month: 'Jun', income: 24500, expense: 13200 },
    { month: 'Jul', income: 24600, expense: 13290 }
  ];

  const invoiceData = [
    { label: 'Overdue', amount: 5420, percentage: 25, color: '#A855F7' },
    { label: 'Not Paid', amount: 8730, percentage: 40, color: '#EF4444' },
    { label: 'Paid', amount: 12890, percentage: 60, color: '#22C55E' }
  ];

  // Login Screen
  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">panze studio</h1>
              <p className="text-gray-600">Welcome back! Please login to your account.</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="manager@panze.studio or employee@panze.studio"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Forgot Password?</button>
              </div>
              
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
              
              <div className="text-center text-gray-600">
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => setCurrentView('register')}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Demo accounts:</p>
            <p>Manager: manager@panze.studio | Employee: employee@panze.studio</p>
          </div>
        </div>
      </div>
    );
  }

  // Registration Screen
  if (currentView === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">panze studio</h1>
              <p className="text-gray-600">Create your account to get started.</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Account Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setRegisterRole('employee')}
                    className={`px-4 py-3 rounded-xl border-2 transition-all ${
                      registerRole === 'employee'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 font-semibold'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Employee
                  </button>
                  <button
                    onClick={() => setRegisterRole('manager')}
                    className={`px-4 py-3 rounded-xl border-2 transition-all ${
                      registerRole === 'manager'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 font-semibold'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Manager
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleRegister}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Create Account
              </button>
              
              <div className="text-center text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => setCurrentView('login')}
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-[#F7F9FB]">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-gray-900">panze studio</h1>
            </div>
            
            {/* Filter Pills */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setSelectedPeriod('today')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedPeriod === 'today'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Today
              </button>
              <button
                onClick={() => setSelectedPeriod('week')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedPeriod === 'week'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                This Week
              </button>
              <button
                onClick={() => setSelectedPeriod('month')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedPeriod === 'month'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                This Month
              </button>
            </div>
            
            {/* Search and User */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Task, Meeting, Projects…"
                  className="w-80 pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">{currentUser?.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{currentUser?.role}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold shadow-lg">
                  {currentUser?.avatar}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 bg-white border-r border-gray-200 min-h-screen p-4">
          <nav className="space-y-4">
            {[
              { id: 'dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { id: 'tasks', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { id: 'calendar', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
              { id: 'files', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
              { id: 'messages', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
              { id: 'settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full p-3 rounded-2xl transition-all ${
                  activeNav === item.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                }`}
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </button>
            ))}
            
            <button
              onClick={handleLogout}
              className="w-full p-3 rounded-2xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all mt-8"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Project Dashboard</h2>
            <p className="text-gray-600 mt-1">Manage and track your projects</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - My Tasks */}
            <div className="col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">My Tasks</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setActiveTab('today')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'today'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Today
                  </button>
                  <button
                    onClick={() => setActiveTab('tomorrow')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'tomorrow'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Tomorrow
                  </button>
                </div>

                <select className="w-full mb-4 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>On Going Tasks</option>
                  <option>Completed Tasks</option>
                  <option>All Tasks</option>
                </select>

                <div className="space-y-3">
                  {tasks.map(task => (
                    <div key={task.id} className={`p-4 rounded-xl border ${
                      task.status === 'in-progress' 
                        ? 'bg-blue-50 border-blue-100' 
                        : 'bg-gray-50 border-gray-100'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-xs font-bold text-gray-700">
                          {task.project.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">{task.title}</h4>
                          <p className="text-xs text-gray-600">{task.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div className="col-span-6 space-y-6">
              {/* Projects Overview & Income vs Expense */}
              <div className="grid grid-cols-2 gap-6">
                {/* Projects Overview */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Projects Overview</h3>
                  <div className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={projectsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {projectsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {projectsData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="font-semibold text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Income vs Expense */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Income vs Expense</h3>
                  <div className="flex gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-600">Income</div>
                      <div className="text-xl font-bold text-blue-600">$24,600</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Expense</div>
                      <div className="text-xl font-bold text-orange-600">$13,290</div>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={incomeExpenseData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#999" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#999" style={{ fontSize: '12px' }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="income" stroke="#5B8DEF" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="expense" stroke="#FF9F43" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Invoice Overview */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Invoice Overview</h3>
                <div className="space-y-4">
                  {invoiceData.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className="text-sm font-bold text-gray-900">${item.amount.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-3 space-y-6">
              {/* My Meetings */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">My Meetings</h3>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">See All</button>
                </div>
                <div className="space-y-3">
                  {meetings.map(meeting => (
                    <div key={meeting.id} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-900">{meeting.title}</span>
                        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                          meeting.platform === 'meet' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {meeting.platform === 'meet' ? 'M' : 'Z'}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">{meeting.projectName}</div>
                      <div className="text-xs text-gray-500 mt-1">{meeting.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Tickets */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Open Tickets</h3>
                <div className="space-y-4">
                  {tickets.map(ticket => (
                    <div key={ticket.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-semibold">
                          {ticket.userAvatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-gray-900">{ticket.userName}</div>
                          <p className="text-xs text-gray-600 mt-1">{ticket.message}</p>
                        </div>
                      </div>
                      <button className="w-full py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                        Check
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
