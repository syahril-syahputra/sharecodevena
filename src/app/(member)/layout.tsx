'use client';
import React from 'react';
import DashboardDrawer from '@/components/base/Dashboard/Drawer';
// import { useSession } from 'next-auth/react';
export default function Layout({ children }: { children: React.ReactNode }) {
    // const { data: session, status } = useSession();
    return (
        <div className="flex min-h-screen flex-col ">
            <DashboardDrawer />
            <main className="mt-16 flex-1">
                <div className="p-4 sm:ml-64">
                    <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
