'use client';

import Loader from "@/components/admin-panel/Loader";
import Login from "@/components/admin-panel/Login";
import { useAppSelector } from "@/redux/Hooks";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/admin-panel/Sidebar";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const isLoading = useAppSelector(store => store.loadingReducer);
    const { data: session } = useSession();

    if (!session?.user) {
        return <Login />;
    }

    return (
        <div className="flex">
            <Sidebar/>
            <div className="w-full h-full">
                {/* <Navbar /> */}
                <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
            </div>
            {isLoading && <Loader />}
        </div>
    );
};

export default Layout;
