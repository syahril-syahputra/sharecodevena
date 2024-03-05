'use client';
import React, { useState } from 'react';
import DashboardNavbar from './Navbar';
import DashboardSidebar from './Sidebar';

export default function DashboardDrawer() {
    const [isShowSidebar, setisShowSidebar] = useState<boolean>(false);
    return (
        <>
            <DashboardNavbar
                sidebar={isShowSidebar}
                onHideSidebar={setisShowSidebar}
            />
            <DashboardSidebar isShow={isShowSidebar} />
        </>
    );
}
