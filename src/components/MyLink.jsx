"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, children}) => {
    const pathname = usePathname();
    console.log(pathname, href,"pathname")
    return ( <Link href={href} className={`${pathname === href ? " bg-[#244D3F] text-white": "" }`}>{children}</Link>
    );
};

export default MyLink;