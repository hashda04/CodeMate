// src/components/dashboard/DashboardHome.jsx

import React from 'react';

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome back, [User] 👋</h1>
      <p className="text-gray-600 mb-6">Here’s what’s happening today.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">📂 Your Projects</div>
        <div className="bg-white rounded-xl p-4 shadow">💬 Team Messages</div>
        <div className="bg-white rounded-xl p-4 shadow">📈 Analytics</div>
      </div>
    </div>
  );
};

export default DashboardHome;
