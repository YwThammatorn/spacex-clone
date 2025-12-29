import Image from "next/image"
import Link from "next/link"

import Dropdown from "./client/Dropdown"
import DropdownIpad from "./client/Dropdown-Ipad"

const Navbar = () => {
  return (
    <div className='fixed z-10 flex justify-start items-center gap-[46px] w-full h-[4.625rem] pl-[3.945%] pr-[3.945%] bg-[linear-gradient(#00000099_0%,#00000000_95%)] max-ipad:justify-between'>
      {/* logo */}
      <Link href={"/"}>
        <Image src="/spacex_logo.png" alt="spacex_logo"
          width={137}
          height={19}
          className="mr-[5px]"
        />
      </Link>

      {/* links */}
      <div className="flex gap-[2.46vw] text-[0.813rem] tracking-[0.09em] uppercase font-ddin font-[700] max-ipad:hidden">
        <Dropdown />
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Launches</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Human spaceflight</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Rideshare</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Starlink</Link>
        <Link href={'/starshield'} className="hover:cursor-pointer hover:text-[var(--white-100)]">Starshield</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Company</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-100)]">Shop</Link>
      </div>

      <DropdownIpad />
    </div>
  )
}

export default Navbar