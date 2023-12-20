"use client";
import Image from 'next/image'
type Props = {}

const HeroComponent = (props: Props) => {
    return (
        <div className='flex flex-col'>
            <span className='font-bold pb-2 text-white'>
                Most Recent
            </span>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full h-[220px] md:gap-1 space-y-1 md:space-y-0'>
                <div className='col-span-2 grid grid-cols-2 gap-1 w-full h-full'>
                    <div className='w-full h-full bg-slate-600 relative'>
                        <Image
                            src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2F0369cd1a-e998-469a-88ae-648689b2c100%2FMagura_DH0830_20231219_Shakib_Al_Hasan___23_.JPG?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                            alt='news1'
                            height={300}
                            width={400}
                            className='h-full w-full object-cover object-center opacity-75'
                        />
                        <span className='absolute top-1 md:top-4 left-1 md:left-4 bg-sky-400 text-white text-[10px] md:text-xs px-1 md:px-3 py-0.5 md:py-1.5 flex justify-center items-center rounded-sm md:rounded-md font-semibold'>
                            রাজনীতি
                        </span>
                        <div className='absolute bottom-1 md:bottom-2 flex flex-col space-y-2 md:space-y-3 px-1 md:px-2'>
                            <span className='text-white text-[10px] md:text-xs'>
                                ২০ ডিসেম্বর ২০২৩
                            </span>
                            <span className='text-white font-bold text-xs md:text-xl'>
                                আমি যদি সেলিব্রিটি হই, সে তো সবার জন্য সেলিব্রিটি
                            </span>
                        </div>
                    </div>
                    <div className='w-full h-full bg-slate-600 relative'>
                        <Image
                            src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2Ff8f2d215-8bd3-4d91-9633-3f5cba40769b%2F20230111128L.jpg?rect=0%2C0%2C5650%2C3178&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                            alt='news1'
                            height={300}
                            width={400}
                            className='h-full w-full object-cover object-center opacity-75'
                        />
                        <span className='absolute top-1 md:top-4 left-1 md:left-4 bg-sky-400 text-white text-[10px] md:text-xs px-1 md:px-3 py-0.5 md:py-1.5 flex justify-center items-center rounded-sm md:rounded-md font-semibold'>
                            বিনোদন
                        </span>
                        <div className='absolute bottom-1 md:bottom-2 flex flex-col space-y-2 md:space-y-3 px-1 md:px-2'>
                            <span className='text-white text-[10px] md:text-xs'>
                                ২০ ডিসেম্বর ২০২৩
                            </span>
                            <span className='text-white font-bold text-xs md:text-xl'>
                                এবার দেশে আসছে শাহরুখের ‘ডানকি’, কবে মুক্তি পাবে
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full bg-slate-600 col-span-1 relative'>
                    <Image
                        src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2F708b22c5-e91a-435f-8dc3-cb8f5a14dead%2FDonald_Trump.jpg?rect=0%2C313%2C6000%2C3375&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                        alt='news1'
                        height={300}
                        width={400}
                        className='h-full w-full object-cover object-center opacity-75'
                    />
                    <span className='absolute top-2 left-2  bg-sky-400 text-white text-xs px-3 py-1.5 flex justify-center items-center rounded-md font-semibold'>
                        আন্তর্জাতিক
                    </span>
                    <div className='absolute bottom-2 flex flex-col space-y-4 px-2'>
                        <span className='text-white text-xs'>
                            ২০ ডিসেম্বর ২০২৩
                        </span>
                        <span className='text-white font-bold text-xl'>
                            কলোরাডোতে ২০২৪ সালের নির্বাচনে ট্রাম্পকে অযোগ্য ঘোষণা
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent