import Image from 'next/image'
import HeroComponent from './components/HeroComponent'
import { Heart, Share2 } from 'lucide-react'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto h-full justify-center text-slate-400 bg-slate-900'>
      <div className='bg-gradient-to-l from-slate-950 via-slate-900 to bg-slate-950 h-[355px]'>
        <div className='p-2 md:p-4 lg:p-6'>
          <HeroComponent />
        </div>
      </div>
      <div className='p-2 md:p-6 grid grid-cols-1 md:grid-cols-3 h-[400px] gap-2 w-full'>
        <div className='col-span-2 w-full h-full relative'>
          <Image
            src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2Fa5b14404-09b9-4842-9b45-e2075d7cc873%2F959361_01_02.jpg?rect=0%2C0%2C2720%2C1530&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
            alt='mainnews'
            width={400}
            height={400}
            className='w-full h-full object-cover object-center opacity-75'
          />
          <div className='absolute right-3 top-3 flex flex-col gap-2'>
            <span className='bg-black p-1.5 rounded-md cursor-pointer hover:bg-sky-400 duration-300'>
              <Heart className='h-6 w-6 text-white hover:text-black' />
            </span>
            <span className='bg-black p-1.5 rounded-md cursor-pointer hover:bg-sky-400 duration-300'>
              <Share2 className='h-6 w-6 text-white hover:text-black' />
            </span>
          </div>
          <span className='absolute top-2 md:top-4 left-2 md:left-4  bg-sky-400 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 flex justify-center items-center rounded-md font-semibold'>
            ক্রিকেট
          </span>
          <div className='absolute bottom-2 flex flex-col space-y-4 px-2'>
            <span className='text-white text-xs md:text-md'>
              ২০ ডিসেম্বর ২০২৩
            </span>
            <span className='text-white font-bold text-lg md:text-4xl'>
              ২ ঘণ্টার মধ্যে কামিন্সের রেকর্ড ভেঙে আইপিএলের সবচেয়ে দামি স্টার্ক
            </span>
          </div>
        </div>
        <div className='col-span-1'>
          one
        </div>
      </div>
    </div>
  )
}
