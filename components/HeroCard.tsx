interface card{
    bgImg: string,
    header: string,
    desc: string,
    bgGradient: string //90,180,270,360
}

const HeroCard = ({ bgImg, header, desc, bgGradient } : card) => {
  return (
    <div className="relative flex items-center h-[max(100svh,941px)] w-full">
        <img className="w-full h-full object-cover" src={bgImg} alt="section_bg" />
        
        {bgGradient ? 
            <div className={"absolute w-full h-full " + bgGradient}></div>
            :
            <div></div>

        }
        
        <div className="absolute top-[33.5%] flex flex-col items-center w-full h-full max-ipad:w-[50%]">
          <h3 className="h-[120px]">{header}</h3>
          <p className="uppercase mt-[22px]">{desc}</p>
        </div>
    </div>
  )
}

export default HeroCard