"use client";

import { Button } from '@/components/ui/button';
import { CircleUserRound, Grip, Menu, Search } from 'lucide-react';
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
        <div className={`max-w-7xl mx-auto md:mt-6 h-14 md:h-24 bg-gradient-to-l from-slate-950 via-slate-900 to bg-slate-950 shadow-2xl`}>
            <div className='flex w-full h-full items-center justify-between px-2 md:px-6 text-white'>
                <div className='flex items-center gap-8'>
                    <Link href={"/"}>
                        <div className='flex items-center text-lg md:text-xl font-extrabold'>
                            <span>সৈয়দপুর</span>
                        </div>
                    </Link>
                    <div className='items-center gap-6 text-sm uppercase font-semibold hidden sm:flex'>
                        {Links.map((link, index) => (
                            <Link key={index} href={link.url} className={`${pathname === link.url && active}  hover:text-sky-500 duration-300`}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Button className='bg-sky-500 p-5 rounded-full text-sm tracking-wide hover:bg-sky-600 hidden sm:flex'>
                        সাবস্ক্রাইব করুন
                    </Button>
                    <CircleUserRound className='w-5 h-5 cursor-pointer ' strokeWidth={2.3} />
                    <Menu className='w-5 h-5 cursor-pointer   hidden sm:block' strokeWidth={2.3} />
                    <Search className='w-5 h-5 cursor-pointer ' strokeWidth={2.3} />
                    <Grip className='w-5 h-5 cursor-pointer  md:hidden' strokeWidth={2.3} />
                </div>
            </div>
        </div>
    )
}

export default NavMenu;