// src/components/dashboard/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-full shadow hidden md:block">
      <div className="p-6 text-2xl font-bold text-indigo-600">CodeMate</div>
      <nav className="space-y-1 mt-4">
        <Link to="/dashboard" className="block px-6 py-2 hover:bg-indigo-100 text-gray-700">Dashboard</Link>
        <Link to="/projects" className="block px-6 py-2 hover:bg-indigo-100 text-gray-700">Projects</Link>
        <Link to="/chat" className="block px-6 py-2 hover:bg-indigo-100 text-gray-700">Chat</Link>
        <Link to="/profile" className="block px-6 py-2 hover:bg-indigo-100 text-gray-700">Profile</Link>
        <Link to="/settings" className="block px-6 py-2 hover:bg-indigo-100 text-gray-700">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
