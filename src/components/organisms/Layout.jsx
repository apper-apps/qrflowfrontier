import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import Footer from "@/components/organisms/Footer";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onMenuToggle={toggleSidebar} />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;