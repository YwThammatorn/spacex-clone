'use client'
import Link from "next/link"
import Image from "next/image"

import { Menu,X,ChevronDown } from "lucide-react"

import { useState, MouseEvent } from "react"

const DropdownIpad = () => {
  const [ishidden,setIshidden] = useState(true)
  const [isclickV,setIsclickV] = useState(false)
  const [isclickC,setIsclickC] = useState(false)

  const handleClickX = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIshidden(!ishidden)
  }

  const handleClickV = (e : MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsclickV(!isclickV)
  }

   const handleClickC = (e : MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsclickC(!isclickC)
  }

  

  return (
    <div className="text-[var(--white-90)]">
      <button onClick={handleClickX} className="relative z-11 bg-transparent border-none max-pc:hidden max-ipad:flex"><Menu width={24} height={24} /></button>
      {ishidden ? 
        <div></div>
        :
        <div className="absolute z-11 flex flex-col w-full h-[100vh] bg-[#000] left-[0px] top-[0px] pt-[24px] pl-[16px] pr-[16px]">
            <div className="flex justify-between items-center pb-[40px]">
              {/* logo */}
              <div>
                <Image src="/spacex_logo.png" alt="spacex_logo"
                  width={137}
                  height={19}
                  className="mr-[5px]"
                />
              </div>

              <button className="p-0 border-none bg-transparent" onClick={handleClickX}><X /></button>
            </div>
            

            {/* links */}
            <div className="flex flex-col gap-[2.46vw] text-[1.125rem] tracking-[0.09em] uppercase font-ddin font-[700]">
              {/* dropdown */}
              <div className="flex flex-col">
                  <div className="flex items-center" onClick={handleClickV}>
                      <p id="vehicles-p" className="pr-[3px] hover:cursor-pointer hover:text-[var(--white-100)]">Vehicles</p>
                      <ChevronDown width={16} height={16}/>
                  </div>
                  {
                      isclickV ?
                      <div className="flex flex-col text-[0.825rem] font-[400] mt-[16px] pt-[10px] pb-[10px] w-[160%] gap-[24px]">
                          <Link href={''} className="uppercase hover:text-[var(--white-100)]">Starship</Link>
                          <Link href={''} className="uppercase hover:text-[var(--white-100)]">Dragon</Link>
                          <Link href={''} className="uppercase hover:text-[var(--white-100)]">Falcon 9</Link>
                          <Link href={''} className="uppercase hover:text-[var(--white-100)]">Falcon Heavy</Link>
                      </div>
                      :
                      <div></div>
                  }
                  
              </div>
              <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Launches</Link>
              <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Human spaceflight</Link>
              <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Rideshare</Link>
              <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Starlink</Link>
              <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Starshield</Link>
               {/* dropdown */}
              <div className="flex flex-col">
                  <div className="flex items-center" onClick={handleClickC}>
                      <p id="vehicles-p" className="pr-[3px] hover:cursor-pointer hover:text-[var(--white-100)]">Company</p>
                      <ChevronDown width={16} height={16}/>
                  </div>
                  {
                      isclickC ?
                      <div className="flex flex-col text-[0.825rem] font-[400] mt-[16px] pt-[10px] pb-[10px] w-[160%] gap-[24px]">
                          <Link href={''} className="uppercase hover:text-[var(--white-100)]">Mission</Link>
                          <Link href={''} className="uppercase hover:text-[var(--white-100)]">Careers</Link>
                          <Link href={''} className="uppercase hover:text-[var(--white-100)]">Updates</Link>
                      </div>
                      :
                      <div></div>
                  }
                  
              </div>
              <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Shop</Link>
            </div>
        </div>
      }
    </div>
    
  )
}

export default DropdownIpad