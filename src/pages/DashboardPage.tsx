// DashboardPage.tsx
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome to the protected dashboard!</p>
      </div>
    </div>
  );
};

export default DashboardPage;
