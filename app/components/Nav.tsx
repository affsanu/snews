"use client";

import { Button } from '@/components/ui/button';
import { logo } from '@/public';
import { CircleUserRound, Menu, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


const Links = [
    { name: "Home", url: "/" },
    { name: "World", url: "/world" },
    { name: "Technology", url: "/technology" },
    { name: "Tips & Ideas", url: "/idea" },
    { name: "Healthy Foods", url: "/health" },
    { name: "Economy", url: "/economy" },
]

const NavMenu = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const active = "text-sky-500 border-b-4 border-sky-500 inline-block"
    return (
        <div className={`max-w-full mx-96 sticky h-32 bg-gradient-to-l from-slate-950 via-slate-900 to bg-slate-950 shadow-2xl
        ${isScrolled ? "mt-0" : "mt-6"}
        `}>
            <div className='flex w-full h-full items-center justify-between px-6 text-white'>
                <div className='flex items-center gap-8'>
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            alt='logo'
                            width={200}
                            height={200}
                            className='w-full h-full object-cover object-center'
                        />
                    </Link>
                    <div className='flex items-center gap-6 text-lg uppercase font-bold'>
                        {Links.map((link, index) => (
                            <Link key={index} href={link.url} className={`${pathname === link.url && active}`}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <Button className='bg-sky-500 p-6 rounded-full text-md'>
                        Watch now
                    </Button>
                    <CircleUserRound />
                    <Menu />
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default NavMenu;