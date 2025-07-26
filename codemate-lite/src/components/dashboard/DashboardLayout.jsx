// src/components/dashboard/DashboardLayout.jsx

import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import DashboardHome from './DashboardHome';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <DashboardHome />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
