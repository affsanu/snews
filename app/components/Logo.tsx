"use client"
import { GiNewspaper } from "react-icons/gi";

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className="flex flex-col items-center text-sky-500">
            <GiNewspaper className="w-8 md:w-12 h-8 md:h-12" />
            <span className="uppercase font-bold text-xs md:text-lg">
                Saidpur News
            </span>
        </div>
    )
}

export default Logo;