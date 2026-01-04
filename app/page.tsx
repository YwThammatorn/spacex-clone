import Image from "next/image";
import NavBtn from "@/components/NavBtn";
import SectionCard from "@/components/SectionCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* subpage 1 */}
      <SectionCard 
        bgVideo="https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4" 
        posterVideo="https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Web_8fafe15a48.jpg"
        videoDir=""
        bgImg=''
        bgGradient=''
        textDir="top-[37%] left-[100px] max-w-[650px]"
        lineHeight={3}
        header="Making Life Multiplanetary"
        desc="SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not."
        button={<NavBtn name="Explore" dest=" " haveArrow={true} />}
      />

      {/* subpage 2 */}
      <SectionCard 
        bgVideo="" 
        posterVideo=""
        videoDir=""
        bgImg="https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg"
        bgGradient='bg-[linear-gradient(90deg,#00000000_50%,#000000cc_100%)]'
        textDir="top-[13%] right-[100px] max-w-[650px]"
        lineHeight={3.5}
        header="Revolutionizing space technology"
        desc="SpaceX's Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond."
        button={<NavBtn name="Learn more" dest=" " haveArrow={true} />}
      />

      {/* subpage 3 */}
      <SectionCard 
        bgVideo="https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4" 
        posterVideo="https://sxcontent9668.azureedge.us/cms-assets/assets/Leading_Launch_Service_Desktop_06a98ac534.jpg"
        videoDir=""
        bgImg=""
        bgGradient='bg-[linear-gradient(270deg,#00000000_50%,#000000cc_100%)]'
        textDir="top-[13%] left-[100px] max-w-[650px]"
        lineHeight={3}
        header="World's leading launch service provider"
        desc="SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity's ability to access space into something as routine as air travel."
        button={<NavBtn name="Reserve your ride" dest=" " haveArrow={true} />}
      />

      {/* subpage 4 */}
      <SectionCard 
        bgVideo="" 
        posterVideo=""
        videoDir=""
        bgImg="https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg"
        bgGradient=''
        textDir="top-[13%] right-[100px] max-w-[650px]"
        lineHeight={3.5}
        header="Advancing human spaceflight"
        desc="Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping bulid a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space."
        button={<NavBtn name="Join a Mission" dest=" " haveArrow={true} />}
      />

      {/* subpage 5 */}
      <SectionCard 
        bgVideo="https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4" 
        posterVideo=""
        videoDir=""
        bgImg=""
        bgGradient='bg-[linear-gradient(180deg,#00000000_50%,#000_100%)]'
        textDir="left-[100px] max-w-[650px]"
        lineHeight={3}
        header="Delivering high-speed internet from space"
        desc="Starlink is the world's most advanced satelite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more."
        button={<NavBtn name="Order now" dest=" " haveArrow={true} />}
      />
    </div>
  );
}
