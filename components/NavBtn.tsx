import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface btn{
  name: string,
  dest: string,
  haveArrow: boolean
}

const NavBtn = ({ name, dest, haveArrow } : btn) => {
  return (
    <Link href={dest} className="uppercase flex w-fit mt-[30px] pl-[20px] pr-[20px] pt-[15px] pb-[12px] bg-[var(--black-50)] text-[0.75rem] border-[1px] border-[var(--white-35)] rounded-[4px] hover:bg-[var(--white-90)] hover:text-black">
      {name}
      {haveArrow ? 
        <ArrowRight width={18} height={18} className="ml-[8px]" />
        :
        <div></div>
      }
    </Link>
  )
}

export default NavBtn