import SectionCard from "@/components/SectionCard"
import InfoCard from "@/components/InfoCard"
import HeroCard from "@/components/HeroCard"
import ColCard from "@/components/ColCard"
import NavBtn from "@/components/NavBtn"

const Starshield = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
        
        {/* hero section */}
        <HeroCard 
          bgImg="https://www.spacex.com/assets/images/starshield/hero.webp"
          bgGradient=""
          header="Starshield"
          desc="Supporting national security"
        />

        {/* 3 cols section */}
        <div className="flex flex-col gap-[4.6875rem] justify-center items-center w-full h-[750px] pl-[53.6px] pr-[53.6px]">
          {/* description */}
          <div className="flex justify-between items-center gap-[80px]">
            <h1 className="leading-[3rem]">Secured satellite network for government entities</h1>
            <p>Starshield leverages SpaceX's Starlink technology and launch capability to support national security efforts. While Starlink is designed for consumer and commercial use, Starshield is designed for government use, with an initial focus on three areas:</p>
          </div>

          <div className="flex gap-[2.1875rem]">
            <ColCard 
              borderDir="border-t-[1px] border-[var(--white-100)]"
              iconImg="https://www.spacex.com/assets/images/starshield/icon-security.webp"
              header="Earth observation"
              desc="Starshield launches satellites with sensing payloads and delivers processed data directly to the user."
            />

            <ColCard 
              borderDir="border-t-[1px] border-[var(--white-100)]"
              iconImg="https://www.spacex.com/assets/images/starshield/icon-connected.webp"
              header="Communications"
              desc="Starshield provides assured global communications to government users with Starshield user equipment."
            />

            <ColCard 
              borderDir="border-t-[1px] border-[var(--white-100)]"
              iconImg="https://www.spacex.com/assets/images/starshield/icon-payloads.webp"
              header="Hosted payloads"
              desc="Starshield builds satellite buses to support the most demanding customer payload missions."
            />
          </div>
        </div>

        {/* subpage 1 */}
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/capacity.webp"
          bgGradient='bg-[linear-gradient(to_right,#00000000,#000)]'
          textDir="top-[40%] right-[150px] w-[32%]"
          lineHeight={3}
          header="Security"
          desc="Starlink already offers unparalleled end-to-end user data encryption. Starshield uses additional high-assurance cryptographic capability to host classified payloads and process data securely, meeting the most demanding government requirements."
          button=""
        />

        {/* subpage 2 */}
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/modular-design.webp"
          bgGradient='bg-[linear-gradient(to_right,#00000000,#000)]'
          textDir="top-[40%] right-[150px] w-[32%]"
          lineHeight={3}
          header="Modular design"
          desc="Designed to meet diverse mission requirements, Starshield satellites are capable of integrating a wide variety of payloads, offering unique versatility to users."
          button=""
        />

        {/* subpage 3 */}
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/interoperability.webp"
          bgGradient='bg-[linear-gradient(to_left,#00000000,#000)]'
          textDir="top-[40%] left-[100px] w-[32%]"
          lineHeight={3}
          header="Interoperability"
          desc="Starlink's inter-satellite laser communications terminal, which is the only communications laser operating at scale in orbit today, can be integrated onto partner satellites to enable incorporation into te Starshield network."
          button=""
        />

        {/* subpage 4 */}
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/rapid-development.webp"
          bgGradient=''
          textDir="right-[150px] w-[32%]"
          lineHeight={3}
          header="Rapid development and deployment"
          desc="With the proven ability to iterate rapidly, SpaceX's unique full-stack approach in developing end-to-end systems, from launch vehicles to user terminals, enables the deployment of capabilities at scale with unprecedented speed."
          button=""
        />

        {/* subpage 5 */}
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/resilient.webp"
          bgGradient='bg-[linear-gradient(to_left,#00000000,#000)]'
          textDir="top-[50%] left-[100px] w-[32%]"
          lineHeight={3}
          header="Resilient and scalable capability"
          desc="Starshield's proliferated low-Earth orbit architecture provides inherent resiliency and constant connectivity to on-orbit assets, while SpaceX's proven rapid launch capability provides expedient and economical access to space."
          button=""
        />

        {/* subpage 6 */}
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/proven-partnerships.webp"
          bgGradient='bg-[linear-gradient(to_right,#00000000,#000)]'
          textDir="top-[40%] right-[150px] w-[32%]"
          lineHeight={3}
          header="Proven partnerships"
          desc="SpaceX's ongoing work with the Department of Defense and other partners demonstrates our ability to provide in-space and on-ground capability at scale."
          button=""
        />

        {/* info subpage */}
        <InfoCard 
          info="" 
          button={<NavBtn name="Contact us" dest=" " haveArrow={false} />}
        />
    </div>
  )
}

export default Starshield