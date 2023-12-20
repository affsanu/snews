"use client";
import Typewriter from 'react-ts-typewriter';

type Props = {}

const TypewriterEff = (props: Props) => {
    return (
        <div className='text-xs text-slate-300'>
            <Typewriter
                text={[
                    'আমি যদি সেলিব্রিটি হই, সে তো সবার জন্য সেলিব্রিটি',
                    'এবার দেশে আসছে শাহরুখের ‘ডানকি’, কবে মুক্তি পাবে',
                    'কলোরাডোতে ২০২৪ সালের নির্বাচনে ট্রাম্পকে অযোগ্য ঘোষণা',
                ]}
                loop={true}
            />
        </div>
    )
}

export default TypewriterEff;