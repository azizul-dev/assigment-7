import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { RiTimeLine } from 'react-icons/ri';

const NavBar = () => {
    return (
        <div>
            <div className=" bg-base-100 shadow-sm flex justify-between items-center px-4 py-2">
            <div className="flex-1">
                <a className="btn btn-ghost font-bold text-3xl">Keen<span className=' text-[#244D3F]'>Keeper</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}> <FaHome />Home</Link></li>
                    <li><Link href={"/"}> <RiTimeLine />Timeline</Link></li>
                    <li><Link href={"/"}> <GoGraph />Stats</Link></li>
                    
                </ul>
            </div>
        </div>
        </div>
    );
};

export default NavBar;