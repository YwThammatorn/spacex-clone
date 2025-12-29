import SectionCard from "@/components/SectionCard"
import InfoCard from "@/components/InfoCard"
import NavBtn from "@/components/NavBtn"

const Starshield = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/capacity.webp"
          bgGradient='bg-[linear-gradient(to_right,#00000000,#000)]'
          textDir="top-[50%] right-[50px]"
          lineHeight={3}
          header="Security"
          desc="Starlink already offers unparalleled end-to-end user data encryption. Starshield uses additional high-assurance cryptographic capability to host classified payloads and process data securely, meeting the most demanding government requirements."
          button=""
        />

        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/modular-design.webp"
          bgGradient='bg-[linear-gradient(to_right,#00000000,#000)]'
          textDir="top-[50%] right-[50px]"
          lineHeight={3}
          header="Modular design"
          desc="Designed to meet diverse mission requirements, Starshield satellites are capable of integrating a wide variety of payloads, offering unique versatility to users."
          button=""
        />

        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/interoperability.webp"
          bgGradient='bg-[linear-gradient(to_left,#00000000,#000)]'
          textDir="top-[50%] left-[100px]"
          lineHeight={3}
          header="Interoperability"
          desc="Starlink's inter-satellite laser communications terminal, which is the only communications laser operating at scale in orbit today, can be integrated onto partner satellites to enable incorporation into te Starshield network."
          button=""
        />

        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/rapid-development.webp"
          bgGradient=''
          textDir="right-[50px]"
          lineHeight={3}
          header="Rapid development and deployment"
          desc="With the proven ability to iterate rapidly, SpaceX's unique full-stack approach in developing end-to-end systems, from launch vehicles to user terminals, enables the deployment of capabilities at scale with unprecedented speed."
          button=""
        />

        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/resilient.webp"
          bgGradient='bg-[linear-gradient(to_left,#00000000,#000)]'
          textDir="top-[50%] left-[100px]"
          lineHeight={3}
          header="Resilient and scalable capability"
          desc="Starshield's proliferated low-Earth orbit architecture provides inherent resiliency and constant connectivity to on-orbit assets, while SpaceX's proven rapid launch capability provides expedient and economical access to space."
          button=""
        />

        <SectionCard 
          bgVideo="" 
          posterVideo=""
          bgImg="https://www.spacex.com/assets/images/starshield/proven-partnerships.webp"
          bgGradient='bg-[linear-gradient(to_right,#00000000,#000)]'
          textDir="top-[50%] right-[50px]"
          lineHeight={3}
          header="Proven partnerships"
          desc="SpaceX's ongoing work with the Department of Defense and other partners demonstrates our ability to provide in-space and on-ground capability at scale."
          button=""
        />

        <InfoCard 
          info="" 
          button={<NavBtn name="Contact us" dest=" " haveArrow={false} />}
        />
    </div>
  )
}

export default Starshield