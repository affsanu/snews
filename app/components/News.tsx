"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link';

const Links = [
    { name: "All Videos", url: "/videos" },
    { name: "Authors", url: "/author" },
    { name: "Site Map", url: "/map" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
];

const NewsBar = () => {
    return (
        <div className='max-w-7xl mx-auto h-8 bg-gradient-to-l from-slate-800 via-slate-700 to bg-slate-800 shadow-2xl'>
            <div className='h-full flex justify-between items-center px-8'>
                <div className='flex items-center gap-6 w-full h-full'>
                    <div className='h-full w-32 bg-slate-700 flex items-center justify-center text-slate-100 text-sm font-light'>
                        Breaking News
                    </div>
                    <div>
                        abc
                    </div>
                </div>

                <div className='flex items-center justify-end h-full w-full gap-4'>
                    <div className='flex gap-2'>
                        <span className='border flex items-center justify-center p-1 border-slate-500 rounded-sm hover:bg-black/30 cursor-pointer duration-300'>
                            <ChevronLeft className='w-4 h-4 text-slate-400' />
                        </span>
                        <span className='border flex items-center justify-center p-1 border-slate-500 rounded-sm hover:bg-black/30 cursor-pointer duration-300'>
                            <ChevronRight className='w-4 h-4 text-slate-400' />
                        </span>
                    </div>
                    <div className='flex items-center gap-1 text-slate-300 text-sm h-full'>
                        {Links.map((link, index) => (
                            <Link key={index} href={link.url} className='hover:bg-black/30 h-full items-center flex px-2 duration-300'>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBar
