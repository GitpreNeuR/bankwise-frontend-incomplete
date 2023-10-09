// Layout.js

import React,{Suspense} from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-800">
        <Sidebar />
      </div>
      <main className="pl-[19rem] pr-[1rem]">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          
          {children}
        </Suspense>
      </main>
    </div>
  );
};

export default DashboardLayout;
