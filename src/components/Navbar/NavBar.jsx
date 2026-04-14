import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { RiTimeLine } from 'react-icons/ri';

const NavBar = () => {
    const links = (
        <>
            <li><Link href={"/"}> <FaHome />Home</Link></li>
            <li><Link href={"/timeLine"}> <RiTimeLine />Timeline</Link></li>
            <li><Link href={"/stats"}> <GoGraph />Stats</Link></li>

        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">

                {/* LEFT SIDE (Logo + Mobile Menu) */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <Link href={"/"} className="btn btn-ghost font-bold text-3xl">
                        Keen<span className='text-[#244D3F]'>Keeper</span>
                    </Link>
                </div>

                {/* RIGHT SIDE (Links) */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;