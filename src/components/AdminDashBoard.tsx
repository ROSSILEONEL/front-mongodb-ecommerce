import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { selectAuth } from '../app/selectors';
import { useSelector } from 'react-redux';

export const AdminDashBoard: React.FC = () => {
  const userAuth = useSelector(selectAuth);
  return (
    <div className="flex h-screen">
      <nav className="w-1/4 bg-blue-600 p-4 flex flex-col space-y-4">
        <h2 className="text-white text-2xl font-bold mb-4">
          {userAuth? userAuth.user.name : 'Admin'}
        </h2>
        <Link to="/admin/addUser" className="text-white hover:text-gray-200">
          Add User
        </Link>
        <Link to="/admin/addProduct" className="text-white hover:text-gray-200">
          Add Product
        </Link>
      </nav>
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

