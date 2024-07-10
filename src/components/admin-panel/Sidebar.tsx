'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard, MdManageAccounts } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { IoAnalytics, IoSettings } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import Image from 'next/image';
import zain from '@/../public/Zain.svg';
import React from 'react';

const menu = [
    {
        title: 'Dashboard',
        icon: <MdDashboard />,
        href: '/admin/dashboard',
    },
    {
        title: 'Products',
        icon: <RiShoppingCartLine />,
        href: '/admin/product',
    },
    {
        title: 'Accounts',
        icon: <MdManageAccounts />,
        href: '/admin/accounts',
    },
    {
        title: 'Transactions',
        icon: <GrTransaction />,
        href: '/admin/transactions',
    },
    {
        title: 'Analytics',
        icon: <IoAnalytics />,
        href: '/admin/analytics',
    },
    {
        title: 'Setting',
        icon: <IoSettings />,
        href: '/admin/setting',
    },
];

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
            <div className='flex items-center gap-3'>
                <Image src={zain} alt='logo' width={88} />
                <h2 className='text-xl font-bold'>The ZainCode</h2>
            </div>
            <ul className='space-y-4 mt-6'>
                {menu.map((menuItem) => (
                    <Link
                        key={menuItem.title}
                        href={menuItem.href}
                        className={`flex gap-2 items-center p-4 rounded-lg hover:bg-pink hover:text-white ${
                            pathName === menuItem.href ? 'bg-pink text-white' : 'bg-gray-200'
                        }`}
                    >
                        <div className='text-xl'>{menuItem.icon}</div>
                        <p>{menuItem.title}</p>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
