'use client';

import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  assignedBy: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
}

interface User {
  id: string;
  name: string;
  role: 'manager' | 'employee';
}

export default function Home() {
  const [currentUser] = useState<User>({
    id: 'manager1',
    name: 'Manager User',
    role: 'manager',
  });

  const [employees] = useState<User[]>([
    { id: 'emp1', name: 'John Doe', role: 'employee' },
    { id: 'emp2', name: 'Jane Smith', role: 'employee' },
    { id: 'emp3', name: 'Mike Johnson', role: 'employee' },
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete Project Report',
      description: 'Finish the quarterly project report',
      assignedTo: 'emp1',
      assignedBy: 'manager1',
      status: 'in-progress',
      createdAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      title: 'Review Code Changes',
      description: 'Review and approve pull requests',
      assignedTo: 'manager1',
      assignedBy: 'manager1',
      status: 'pending',
      createdAt: new Date('2024-01-02'),
    },
  ]);

  const [activeView, setActiveView] = useState<'assign' | 'report'>('assign');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [selectedAssignee, setSelectedAssignee] = useState('');

  const handleAssignTask = () => {
    if (!taskTitle || !taskDescription || !selectedAssignee) {
      alert('Please fill in all fields');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      assignedTo: selectedAssignee,
      assignedBy: currentUser.id,
      status: 'pending',
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
    setSelectedAssignee('');
    alert('Task assigned successfully!');
  };

  const getAssigneeName = (userId: string) => {
    if (userId === currentUser.id) return currentUser.name;
    const employee = employees.find(emp => emp.id === userId);
    return employee ? employee.name : 'Unknown';
  };

  const getTaskStats = () => {
    const totalTasks = tasks.length;
    const pendingTasks = tasks.filter(t => t.status === 'pending').length;
    const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
    const completedTasks = tasks.filter(t => t.status === 'completed').length;
    const selfAssignedTasks = tasks.filter(t => t.assignedTo === currentUser.id).length;
    
    return {
      totalTasks,
      pendingTasks,
      inProgressTasks,
      completedTasks,
      selfAssignedTasks,
    };
  };

  const stats = getTaskStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Task Management System
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome, {currentUser.name} ({currentUser.role})
          </p>
        </div>

        {/* Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveView('assign')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'assign'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Assign Task
            </button>
            <button
              onClick={() => setActiveView('report')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'report'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              View Report
            </button>
          </div>
        </div>

        {/* Assign Task View */}
        {activeView === 'assign' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Assign New Task
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter task title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Task Description
                </label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter task description"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Assign To
                </label>
                <select
                  value={selectedAssignee}
                  onChange={(e) => setSelectedAssignee(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select assignee...</option>
                  <option value={currentUser.id}>Myself ({currentUser.name})</option>
                  <optgroup label="Employees">
                    {employees.map(emp => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <button
                onClick={handleAssignTask}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                Assign Task
              </button>
            </div>
          </div>
        )}

        {/* Report View */}
        {activeView === 'report' && (
          <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Total Tasks
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stats.totalTasks}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Pending
                </div>
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                  {stats.pendingTasks}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  In Progress
                </div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {stats.inProgressTasks}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Completed
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {stats.completedTasks}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Self-Assigned
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {stats.selfAssignedTasks}
                </div>
              </div>
            </div>

            {/* All Tasks List */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                All Tasks
              </h2>

              <div className="space-y-4">
                {tasks.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                    No tasks assigned yet.
                  </p>
                ) : (
                  tasks.map(task => (
                    <div
                      key={task.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {task.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            task.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : task.status === 'in-progress'
                              ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {task.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div>
                          <span className="font-medium">Assigned to:</span>{' '}
                          <span className={task.assignedTo === currentUser.id ? 'text-purple-600 dark:text-purple-400 font-semibold' : ''}>
                            {getAssigneeName(task.assignedTo)}
                            {task.assignedTo === currentUser.id && ' (Self)'}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">Created:</span>{' '}
                          {task.createdAt.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
