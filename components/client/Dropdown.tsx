'use client'
import Link from "next/link"
import { useState } from "react"

import { ChevronDown } from "lucide-react"

const Dropdown = () => {
    const [ishover,setIshover] = useState(false)

    const handleHover = () => {
        setIshover(!ishover)
    }
  return (
    <div className="relative">
        <div className="flex items-center" onMouseEnter={handleHover}>
            <p className="hover:cursor-pointer hover:text-[var(--white-100)]">Vehicles</p>
            {
                ishover ?
                <ChevronDown width={16} height={16} className="absolute left-[64px]"/>
                :
                <div></div>
            }
        </div>
        {
            ishover ?
            <div className="absolute flex flex-col mt-[8px] w-[160%] gap-[8px]" onMouseOut={handleHover}>
                <Link href={''} className="uppercase hover:text-[var(--white-100)]">Starship</Link>
                <Link href={''} className="uppercase hover:text-[var(--white-100)]">Dragon</Link>
                <Link href={''} className="uppercase hover:text-[var(--white-100)]">Falcon</Link>
                <Link href={''} className="uppercase hover:text-[var(--white-100)]">Falcon Heavy</Link>
            </div>
            :
            <div></div>
        }
        
    </div>
  )
}

export default Dropdown