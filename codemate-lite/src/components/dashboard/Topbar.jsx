// src/components/dashboard/Topbar.jsx

import React from 'react';

const Topbar = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-gray-800">
          🔔
          <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">2</span>
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Topbar;
