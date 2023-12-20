"use client";
import Typewriter from 'react-ts-typewriter';

type Props = {}

const TypewriterEff = (props: Props) => {
    return (
        <div className='text-xs text-slate-300'>
            <Typewriter
                text='ম্যাচসেরা সৌম্যকে ম্লান করে সিরিজ নিউজিল্যান্ডের'
                loop={true}
            />
        </div>
    )
}

export default TypewriterEff;