"use client";

import { Button } from '@/components/ui/button';
import { CircleUserRound, Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Links = [
    { name: "মূলপাতা", url: "/" },
    { name: "আন্তর্জাতিক", url: "/world" },
    { name: "বাংলাদেশ", url: "/bangladesh" },
    { name: "বাণিজ্য", url: "/business" },
    { name: "খেলা", url: "/sports" },
    { name: "বিনোদন", url: "/entertainment" },
    { name: "জীবনযাপন", url: "/lifestyle" },
    { name: "চাকরি", url: "/job" },
]

const NavMenu = () => {
    const pathname = usePathname();
    const active = "text-sky-500 border-b-2 border-sky-500"
    return (
        <div className={`max-w-7xl mx-auto sticky z-50 mt-6 h-24 bg-gradient-to-l from-slate-950 via-slate-900 to bg-slate-950 shadow-2xl`}>
            <div className='flex w-full h-full items-center justify-between px-6 text-white'>
                <div className='flex items-center gap-8'>
                    <Link href={"/"}>
                        <div className='flex flex-col items-center text-xl font-extrabold'>
                            <span>সৈয়দপুর</span>
                            <span>নিউজ</span>
                        </div>
                    </Link>
                    <div className='flex items-center gap-6 text-sm uppercase font-semibold'>
                        {Links.map((link, index) => (
                            <Link key={index} href={link.url} className={`${pathname === link.url && active}  hover:text-sky-500 duration-300`}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Button className='bg-sky-500 p-5 rounded-full text-sm tracking-wide hover:bg-sky-600'>
                        সাবস্ক্রাইব করুন
                    </Button>
                    <CircleUserRound className='w-5 h-5 cursor-pointer' />
                    <Menu className='w-5 h-5 cursor-pointer' />
                    <Search className='w-5 h-5 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default NavMenu;