import React from 'react';
import Footer from '@/components/base/Footer';
import NavbarComponent from '@/components/base/Navbar';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col ">
            <div className="relative overflow-auto">
                <NavbarComponent />
            </div>
            <main className="relative mt-[128px] flex-1 py-4">{children}</main>
            <Footer />
        </div>
    );
}
