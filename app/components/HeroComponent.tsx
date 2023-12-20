import React from 'react'

type Props = {}

const HeroComponent = (props: Props) => {
    return (
        <div className='flex flex-col'>
            <span className='font-bold pb-2'>
                Most Recent
            </span>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full h-[220px] md:gap-1 space-y-1 md:space-y-0'>
                <div className='col-span-2 grid grid-cols-2 gap-1 w-full h-full'>
                    <div className='w-full h-full bg-slate-600'>
                        news two
                    </div>
                    <div className='w-full h-full bg-slate-600'>
                        news three
                    </div>
                </div>
                <div className='w-full h-full bg-slate-600 col-span-1'>
                    news one
                </div>
            </div>
        </div>
    )
}

export default HeroComponent