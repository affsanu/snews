import Image from 'next/image'
import HeroComponent from './components/HeroComponent'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto h-full text-2xl justify-center font-bold text-rose-600 bg-slate-900'>
      <div className='bg-gradient-to-l from-slate-950 via-slate-900 to bg-slate-950'>
        <div className='p-6'>
          <HeroComponent />
        </div>
      </div>
    </div>
  )
}
