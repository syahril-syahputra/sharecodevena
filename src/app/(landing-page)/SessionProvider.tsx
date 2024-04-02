'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export default function SessionProviderHandler({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <main className="relative mt-[128px] flex-1 py-4">{children}</main>
        </SessionProvider>
    );
}
