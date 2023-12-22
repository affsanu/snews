import Image from 'next/image'
import HeroComponent from './components/HeroComponent'
import { Heart, Play, Share2 } from 'lucide-react'

const newses = [
  {
    img: "https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2F40743360-b5f9-4e33-b6b6-b887f32e1336%2FCorona.webp?rect=0%2C34%2C640%2C360&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0",
    label: "বিশ্বজুড়ে দ্রুত ছড়াচ্ছে করোনার জেএন.১ ধরন: ডব্লিউএইচও",
    date: "২১ ডিসেম্বর ২০২৩"
  },
  {
    img: "https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2F6e804be7-b9c4-4807-854b-11bb79d09979%2F6.jpg?rect=0%2C0%2C3500%2C1969&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0",
    label: "রোলেক্সের ১০ কোটি ডলার জরিমানা",
    date: "২০ ডিসেম্বর ২০২৩"
  },
  {
    img: "https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2F40743360-b5f9-4e33-b6b6-b887f32e1336%2FCorona.webp?rect=0%2C34%2C640%2C360&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0",
    label: "বিশ্বজুড়ে দ্রুত ছড়াচ্ছে করোনার জেএন.১ ধরন: ডব্লিউএইচও",
    date: "২১ ডিসেম্বর ২০২৩"
  },
  {
    img: "https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2F40743360-b5f9-4e33-b6b6-b887f32e1336%2FCorona.webp?rect=0%2C34%2C640%2C360&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0",
    label: "বিশ্বজুড়ে দ্রুত ছড়াচ্ছে করোনার জেএন.১ ধরন: ডব্লিউএইচও",
    date: "২১ ডিসেম্বর ২০২৩"
  },
  {
    img: "https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2F40743360-b5f9-4e33-b6b6-b887f32e1336%2FCorona.webp?rect=0%2C34%2C640%2C360&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0",
    label: "বিশ্বজুড়ে দ্রুত ছড়াচ্ছে করোনার জেএন.১ ধরন: ডব্লিউএইচও",
    date: "২১ ডিসেম্বর ২০২৩"
  },
]

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
              <Heart className='h-5 w-5 text-white hover:text-black' />
            </span>
            <span className='bg-black p-1.5 rounded-md cursor-pointer hover:bg-sky-400 duration-300'>
              <Share2 className='h-5 w-5 text-white hover:text-black' />
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
        <div className='col-span-1 flex flex-col gap-4'>
          <div className='flex items-center gap-2 text-white'>
            <Play className='w-8 h-8' />
            <div className='flex flex-col'>
              <span>
                Most Readed
              </span>
              <span className='text-xs'>
                2/6 News
              </span>
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            {newses.map((news, index) => (
              <div key={index} className='flex gap-2 p-2 bg-slate-950'>
                <div className='shadow-sm'>
                  <Image
                    src={news.img}
                    alt='imgalt'
                    width={150}
                    height={150}
                    className='object-cover object-center opacity-90'
                  />
                </div>
                <div className='flex flex-col md:gap-2'>
                  <span className='text-sm text-slate-200'>
                    {news.label}
                  </span>
                  <span className='text-xs'>
                    {news.date}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
