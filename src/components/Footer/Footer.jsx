import Link from 'next/link';
import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="w-full bg-[#244D3F] text-white p-10 text-center">
            <aside>
                <div className=' space-y-4'>
                    <h2 className=' font-bold text-5xl'>KeenKeeper</h2>
                    <p className="font-bold text-zinc-300">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <p className=' font-bold text-xl text-[#ffffff]'>Social Links</p>
                    <div className=' flex justify-center items-center gap-4'>
                        <span><CiInstagram /></span>
                        <span><FaFacebookSquare /></span>
                        <span><FaXTwitter /></span>
                    </div>
                    <hr className=' bg-zinc-600'/>
                    <div className=' flex justify-between items-center gap-5'>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div className=' flex justify-between gap-6'>
                            <button><Link href={"/"}>Privacy Policy</Link></button>
                            <button><Link href={"/"}>Terms of Service </Link></button>
                           <button><Link href={"/"}>Cookies</Link></button>
                        </div>
                    </div>
                </div>
            </aside>

        </footer>
    );
};

export default Footer;