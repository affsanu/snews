import HeroComponent from './components/HeroComponent'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto h-full justify-center text-slate-400 bg-slate-900'>
      <div className='bg-gradient-to-l from-slate-950 via-slate-900 to bg-slate-950 h-[355px]'>
        <div className='p-2 md:p-4 lg:p-6'>
          <HeroComponent />
        </div>
      </div>
    </div>
  )
}
