import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='fixed z-10 flex justify-start items-center gap-[46px] w-full h-[4.625rem] pl-[60px] pr-[60px] bg-[linear-gradient(#00000099_0%,#00000000_95%)]'>
      {/* logo */}
      <div>
        <Image src="/spacex_logo.png" alt="spacex_logo"
          width={137}
          height={19}
        />
      </div>

      {/* links */}
      <div className="flex gap-[2.3125rem] text-[0.813rem] tracking-[0.09em] uppercase font-ddin font-[700]">
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Vehicles</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Launches</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Human spaceflight</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Rideshare</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Starlink</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Starshield</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Company</Link>
        <Link href={''} className="hover:cursor-pointer hover:text-[var(--white-hover)]">Shop</Link>
      </div>
    </div>
  )
}

export default Navbar