interface card{
    bgVideo: string,
    posterVideo: string,
    bgImg: string,
    header: string,
    desc: string,
    bgGradient: string, //90,180,270,360
    textDir: string, //top-[Apx],right-[Bpx],left-[Cpx],bottom-[Dpx]
    lineHeight: number,//rem
    button: React.ReactNode
}

const SectionCard = ({ bgVideo, posterVideo, bgImg, header, desc, bgGradient, textDir, lineHeight, button } : card) => {
  return (
    <div className="relative flex items-center h-[max(100svh,941px)] w-full">
        {bgVideo ? 
            <video autoPlay loop preload="auto" poster={posterVideo} className="w-full h-full object-cover">
            <source type="video/mp4" src={bgVideo}></source>
            </video>
            :
            <div></div>
        }
        {bgImg ?
            <img className="w-full h-full object-cover" src={bgImg} alt="section_bg" />
            :
            <div></div>
        }
        {bgGradient ? 
            <div className={"absolute w-full h-full " + bgGradient}></div>
            :
            <div></div>

        }
        
        <div className={"absolute max-w-[650px] " + textDir + " max-ipad:w-[50%]"}>
          <h1 className={"uppercase max-w-[585px]"} style={{lineHeight: lineHeight+'rem'}}>{header}</h1>
          <p className="mt-[15px]">{desc}</p>
          {button}
        </div>
    </div>
  )
}

export default SectionCard