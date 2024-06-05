import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const DashboardPage: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  if (!token) {
    return <div>Access Denied</div>;
  }

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
