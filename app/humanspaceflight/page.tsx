import HeroCard from "@/components/HeroCard"
import SectionCard from "@/components/SectionCard"
import NavBtn from "@/components/NavBtn"
import SuitFrame from "@/components/client/SuitFrame"

import { CSSProperties } from "react"

const humanSpaceflight = () => {
  const rectStyle : CSSProperties = {
    clipPath: "polygon(0% 0%,100% 0%,100% 50%,0% 50%)"
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <HeroCard
        bgImg="https://www.spacex.com/assets/images/human-spaceflight/home/HS-hero.webp"
        bgGradient="bg-black opacity-40"
        header="Human spaceflight"
        desc="making life multiplanetary"
      />

      <div className="relative flex justify-center h-[max(100svh,941px)] w-full">
        <div className="pt-[16%] h-fit"><h1>Destinations</h1></div>

        <img className="absolute top-[32%] left-[45%] w-[20.7%] h-[16.1%]" src="https://www.spacex.com/assets/images/human-spaceflight/home/destination-moon.svg" alt="moon_link" />
        <img className="absolute top-[25%] left-[63%] w-[23.5%]" src="https://www.spacex.com/assets/images/human-spaceflight/home/destination-mars.svg" alt="mars_link" />
        <img className="absolute top-[50%] left-[28%] w-[12.5%]" src="https://www.spacex.com/assets/images/human-spaceflight/home/destination-dragon.svg" alt="dragon_link" />
        <img className="absolute top-[65%] left-[23%] w-[13.1%]" src="https://www.spacex.com/assets/images/human-spaceflight/home/destination-iss.svg" alt="iss_link" />

        {/* earth with orbits */}
        <svg className="absolute opacity-60 bottom-[-316px] w-[914px]" style={rectStyle} viewBox="0 0 585 585" aria-hidden="true"><circle _ngcontent-dyp-c80="" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-dasharray="1.0015,7.0106" cx="292.5" cy="292.5" r="292"></circle></svg>
        <svg className="absolute opacity-60 bottom-[-216.5px] w-[719px]" style={rectStyle} viewBox="0 0 585 585" aria-hidden="true"><circle _ngcontent-dyp-c80="" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-dasharray="1.0015,7.0106" cx="292.5" cy="292.5" r="292"></circle></svg>
        <svg className="absolute opacity-60 bottom-[-150.5px] w-[583px]" style={rectStyle} viewBox="0 0 585 585" aria-hidden="true"><circle _ngcontent-dyp-c80="" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-dasharray="1.0015,7.0106" cx="292.5" cy="292.5" r="292"></circle></svg>
        <img className="absolute bottom-[141px] w-[27.7%]" src="https://www.spacex.com/assets/images/human-spaceflight/home/Earth.svg" alt="earth_bg" />
      </div>

      {/* the suits */}
      <div className="relative flex flex-col items-center h-[max(100svh,1211px)] w-full pt-[100px] pb-[170px]">
        <img className="absolute z-0 bottom-0" src="https://www.spacex.com/assets/images/human-spaceflight/home/background-gradient.jpg" alt="bg_suit" />
        <h4 className="relative z-1 uppercase h-fit">the suits</h4>
        <div className="relative z-1"><SuitFrame /></div>
      </div>

      <div className="pt-[140px] mb-[48px]"><h1>The Vehicles</h1></div>

      <div className="relative w-full">
          <video autoPlay loop preload="auto" className="absolute right-0 w-[70%] h-full object-cover">
            <source type="video/mp4" src="https://www.spacex.com/assets/videos/human-spaceflight/DriftingDragon_Render_2.mp4"></source>
          </video>
          <SectionCard 
            bgVideo="" 
            posterVideo=""
            videoDir=""
            bgImg=''
            bgGradient=''//bg-[linear-gradient(to_right,#000_9%,#00000000_100%)]
            textDir="top-[37%] left-[100px] max-w-[520px]"
            lineHeight={3}
            header="Dragon"
            desc="The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station."
            button={<NavBtn name="Learn more" dest=" " haveArrow={false} />}
          />
      </div>

      <div className="relative w-full">
        <img className="absolute w-[50%] top-[32%]" src="https://www.spacex.com/assets/images/human-spaceflight/home/starship.webp" alt="dragon_bg" />
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          videoDir=""
          bgImg=''
          bgGradient=''
          textDir="top-[37%] right-[100px] max-w-[520px]"
          lineHeight={3}
          header="Starship"
          desc="Starship is the fully reusable spacecraft and second stage of the Starship system. The vehicle offers an integrated payload section and is capable of carrying passengers and cargo to Earth orbit, planetary destinations, and between destinations on Earth."
          button={<NavBtn name="Learn more" dest=" " haveArrow={false} />}
        />
      </div>

      <div className="relative w-full">
        <img className="absolute right-0 object-cover" src="https://www.spacex.com/assets/images/human-spaceflight/home/crew7_launch.png" alt="section_bg" />
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          videoDir=""
          bgImg=''
          bgGradient=''
          textDir="top-[20%] left-[100px] max-w-[520px]"
          lineHeight={3}
          header="Develop your research"
          desc="SpaceX is looking for exceptional science and research ideas that will enable life in space and on other planets. Research proposals submitted to SpaceX will be reviewed and evaluated based on mission objectives, scientific and technical merit, and feasibility."
          button={<NavBtn name="Learn more" dest=" " haveArrow={false} />}
        />
      </div>
      
    </div>
  )
}

export default humanSpaceflight