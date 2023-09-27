import React from 'react';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function BottomNavbar() {
    const pathname = usePathname();
    return (
        <div className="bg-slate-100 dark:bg-slate-900">
            <div className="container">
                <Navbar
                    fluid
                    rounded={true}
                    className="bg-transparent  capitalize dark:bg-transparent"
                >
                    <Navbar.Brand className="py-4" href="/">
                        <Image
                            src="/logo.png"
                            alt="Venatronics Logo"
                            width={100}
                            className="dark:filter-dark-mode"
                            height={100}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="/" active={pathname === '/'}>
                            Home
                        </Navbar.Link>
                        <Navbar.Link
                            href="/about-us"
                            active={pathname === '/about-us'}
                        >
                            About Us
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">Products</Navbar.Link>
                        <Navbar.Link href="/navbars">RFQ</Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Distributorships
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">Services</Navbar.Link>
                        <Navbar.Link href="/navbars">Quality</Navbar.Link>
                        <Navbar.Link href="/navbars">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}
