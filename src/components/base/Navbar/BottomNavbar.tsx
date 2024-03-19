import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function BottomNavbar() {
    const { data: session, status } = useSession();
    console.log(JSON.stringify(session) + ' <- session active');
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
                    <div className="flex  md:order-2">
                        {status === 'unauthenticated' ? (
                            <div className=" hidden items-center space-x-4 md:flex">
                                <Link href={'/auth/register'}>
                                    <span>Register</span>
                                </Link>
                                <Button size="xs" onClick={() => signIn()}>
                                    Login
                                </Button>
                            </div>
                        ) : (
                            <Dropdown
                                arrowIcon={false}
                                inline
                                // placement="left"
                                label={
                                    <Avatar
                                        alt="User settings"
                                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        rounded
                                    />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        Bonnie Green
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        name@flowbite.com
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => signOut()}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                        )}

                        <Navbar.Toggle />
                    </div>
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
                        <Navbar.Link
                            href="/products"
                            active={pathname === '/products'}
                        >
                            Products
                        </Navbar.Link>
                        <Navbar.Link href="/rfq" active={pathname === '/rfq'}>
                            RFQ
                        </Navbar.Link>
                        <Navbar.Link
                            href="/distributorships"
                            active={pathname === '/distributorships'}
                        >
                            Distributorships
                        </Navbar.Link>
                        <Navbar.Link
                            href="/services"
                            active={pathname === '/services'}
                        >
                            Services
                        </Navbar.Link>
                        <Navbar.Link
                            href="/quality"
                            active={pathname === '/quality'}
                        >
                            Quality
                        </Navbar.Link>
                        <Navbar.Link
                            href="/contact"
                            active={pathname === '/contact'}
                        >
                            Contact
                        </Navbar.Link>
                        <div className=" my-8 flex flex-col items-center space-y-4 border-t py-4 md:hidden">
                            <Link href={'/auth/register'}>
                                <span>Register</span>
                            </Link>
                            <Button
                                className="w-full"
                                size="xs"
                                onClick={() => signIn()}
                            >
                                Login
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}
