'use client';
import React from 'react';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

interface IProps {
    session?: { email: string };
}

export default function BottomNavbarMenu(props: IProps) {
    const pathname = usePathname();
    return (
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
                    {!props.session && (
                        <div className=" hidden items-center space-x-4 md:flex">
                            <Link href={'/auth/register'}>
                                <span>Register</span>
                            </Link>
                            <Button size="xs" onClick={() => signIn()}>
                                Login
                            </Button>
                        </div>
                    )}
                    {props.session && (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            // placement="left"
                            label={
                                <FontAwesomeIcon
                                    icon={faUser}
                                    size="xl"
                                    className="aspect-square rounded-full bg-slate-300 p-2 text-slate-500"
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">Email</span>
                                <span className="block truncate text-sm font-medium lowercase">
                                    {props.session.email}
                                </span>
                            </Dropdown.Header>
                            {/* <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item> */}
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
                    {/* <Navbar.Link href="/rfq" active={pathname === '/rfq'}>
                        RFQ
                    </Navbar.Link> */}
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
    );
}
