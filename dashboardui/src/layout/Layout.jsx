import React, { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Dashboard from "../pages/home/Dashboard";

export default function Layout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex">
            <AppSidebar
                sidebarOpen={isSidebarOpen}
                setSidebarOpen={setIsSidebarOpen}
            />
            <main
                className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                <Header />

                <div className="p-4">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}