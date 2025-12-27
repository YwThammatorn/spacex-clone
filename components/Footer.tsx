import { Twitter } from "lucide-react"

const Footer = () => {
  return (
    <div className='flex justify-between items-center gap-[46px] w-full h-[4.625rem] pl-[60px] pr-[60px] bg-[linear-gradient(#00000000_95%,#00000099_0%)] max-phone:flex-col'>
      {/* button */}
      <a target='_blank' className="p-[18px] rounded-[2rem] bg-[var(--white-10)] hover:cursor-pointer"><Twitter width={12} height={12} /></a>
      
      {/* links */}
      <div className="flex gap-[2.3125rem] text-[0.813rem] uppercase font-ddin font-light max-phone:text-[0.75rem] gap-[12px]">
        <p className="hover:cursor-pointer hover:text-[var(--hover-color)]">Careers</p>
        <p className="hover:cursor-pointer hover:text-[var(--hover-color)]">Updates</p>
        <p className="hover:cursor-pointer hover:text-[var(--hover-color)]">Privacy policy</p>
        <p className="hover:cursor-pointer hover:text-[var(--hover-color)]">suppliers</p>
      </div>

      {/* copyright */}
      <p className="uppercase text-[0.813rem]">&copy; 2025 clone</p>
    </div>
  )
}

export default Footer