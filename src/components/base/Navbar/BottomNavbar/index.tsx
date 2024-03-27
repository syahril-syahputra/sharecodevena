import React from 'react';
import { getCurrentUser } from '@/utils/session';
import BottomNavbarMenu from './BottomNavbarMenu';

export default async function BottomNavbar() {
    const user = await getCurrentUser();

    return (
        <div className="bg-slate-100 dark:bg-slate-900">
            <BottomNavbarMenu session={user} />
        </div>
    );
}
