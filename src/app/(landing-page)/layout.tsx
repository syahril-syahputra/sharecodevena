import React from 'react';
import Footer from '@/components/base/Footer';
import NavbarComponent from '@/components/base/Navbar';
import SessionProviderHandler from './SessionProvider';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col ">
            <NavbarComponent />
            <SessionProviderHandler>{children}</SessionProviderHandler>
            <Footer />
        </div>
    );
}
