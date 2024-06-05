import React, { useState, useEffect } from "react";
import { fetchUsers } from "../services/http";
import Navbar from "../components/Navbar";

const DashboardPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); // Array to store user data

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData); // Setting the fetched user data to the state
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching users:", error);
      }
    };

    getUsers(); // Call the function to fetch users when component mounts
  }, []);

  return (
    <div className="min-h-screen  items-center justify-center bg-gray-100">
      <div>
      <Navbar /> 
        <h2 className="text-2xl font-bold mb-4 text-center">Hello ReqRes users!</h2>
        <div className="bg-white p-8 rounded shadow-md">
          <div className="grid grid-cols-3 gap-5 gap-y-20">
            {users.map((user) => (
              <div key={user.id} className="text-center">
                <img
                  src={user?.avatar}
                  alt={user?.first_name}
                  className="mx-auto w-24 h-24 rounded-full mb-2"
                />
                <p className="font-bold">{user?.first_name}</p>
                <a href={`mailto:${user.email}`}><p>{user.email}</p></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
