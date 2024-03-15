'use client';
import React from 'react';
import Footer from '@/components/base/Footer';
import NavbarComponent from '@/components/base/Navbar';
import { SessionProvider } from 'next-auth/react';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col ">
            <SessionProvider>
                <NavbarComponent />
                <main className="relative mt-[128px] flex-1 py-4">
                    {children}
                </main>
                <Footer />
            </SessionProvider>
        </div>
    );
}
