import React from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';

export default function NavbarComponent() {
    return (
        <div className="fixed z-10 w-full ">
            <TopNavbar />
            <BottomNavbar />
        </div>
    );
}
