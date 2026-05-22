"use client";

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';
import NavbarProfileDropdown from './NavbarProfileDropdown';

const SportNavbar = () => {
    const { data: session } = authClient?.useSession();
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="bg-[#0F172A] border-b border-gray-800 sticky top-0 z-50">
            <div className="container mx-auto px-5 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-3xl font-bold tracking-tighter text-white">
                            FootBoll Sports<span className="text-[#C5A358]"> PSG</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 text-white font-medium">
                        <Link href="/" className="hover:text-[#C5A358] transition-colors">Home</Link>
                        {user && (
                            <>
                                <Link href="/allFacilities" className="hover:text-[#C5A358] transition-colors">Add Room</Link>
                                <Link href="/addMemberShip" className="hover:text-[#C5A358] transition-colors">My Listing</Link>
                                <Link href="/myBooking" className="hover:text-[#C5A358] transition-colors">My Booking</Link>
                            </>
                        )}
                    </div>

                    {/* Right Side - Auth */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                {/* Profile Dropdown */}
                                <NavbarProfileDropdown user={user} onLogout={handleLogout} />

                                {/* Logout Button (visible on larger screens) */}
                                <Button
                                    onClick={handleLogout}
                                    variant="danger"
                                    className="hidden md:flex rounded-xl px-5"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href="/singin" className="text-white hover:text-[#C5A358] transition-colors font-medium px-4 py-2">
                                    Login
                                </Link>
                                <Link href="/register">
                                    <button className="btn bg-[#C5A358] hover:bg-[#b38f4f] text-[#0F172A] font-bold px-6 py-2.5 rounded-xl transition-all">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <label htmlFor="mobile-drawer" className="btn btn-ghost text-[#C5A358] swap swap-rotate">
                                <input type="checkbox" id="mobile-drawer" />
                                <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="swap-on" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6h12v12" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu (like your first image) */}
            <input type="checkbox" id="mobile-drawer" className="hidden peer" />
            <div className="hidden peer-checked:flex fixed inset-0 bg-black/70 z-50 lg:hidden">
                <div className="w-72 bg-[#0F172A] h-full p-6 text-white">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-2xl font-bold">Study<span className="text-[#C5A358]">Nook</span></span>
                        <label htmlFor="mobile-drawer" className="btn btn-ghost text-white">✕</label>
                    </div>

                    <ul className="menu flex flex-col gap-3 text-lg">
                        <li><Link href="/" className="hover:text-[#C5A358]">Home</Link></li>
                        <li><Link href="/addPlayer" className="hover:text-[#C5A358]">Rooms</Link></li>
                        {user && (
                            <>
                                <li><Link href="/allFacilities" className="hover:text-[#C5A358]">Add Room</Link></li>
                                <li><Link href="/addMemberShip" className="hover:text-[#C5A358]">My Listing</Link></li>
                                <li><Link href="/myBooking" className="hover:text-[#C5A358]">My Booking</Link></li>
                            </>
                        )}
                    </ul>

                    {user && (
                        <div className="mt-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C5A358]">
                                    <Image src={user.image || '/default-avatar.png'} alt={user.name || ''} width={48} height={48} />
                                </div>
                                <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-sm text-gray-400">{user.email}</p>
                                </div>
                            </div>
                            <Button onClick={handleLogout} variant="danger" className="w-full rounded-xl">
                                Logout
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default SportNavbar;