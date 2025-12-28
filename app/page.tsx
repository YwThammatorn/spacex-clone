import Image from "next/image";
import NavBtn from "@/components/NavBtn";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">

      {/* subpage 1 */}
      <div className="relative flex items-center h-[max(100svh,941px)] w-full">
        <video autoPlay loop preload="auto" poster="https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Web_8fafe15a48.jpg" className="w-full h-full object-cover">
          <source type="video/mp4" src="https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4"></source>
        </video>
        <div className="absolute top-[37%] left-[100px] max-w-[650px]">
          <h1 className="uppercase max-w-[585px] leading-[3rem]">Making Life Multiplanetary</h1>
          <p className="mt-[15px]">SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.</p>
          <NavBtn name="Explore" dest=" " />
        </div>
      </div>

      {/* subpage 2 */}
      <div className="relative flex items-center h-[max(100svh,941px)] w-full">
        <img className="w-full h-full object-cover" src="https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg" alt="subpage2_bg" />
        <div className="absolute w-full h-full bg-[linear-gradient(90deg,#00000000_50%,#000000cc_100%)]"></div>
        <div className="absolute right-[100px] top-[13%] max-w-[590px]">
          <h1 className="uppercase max-w-[585px] leading-[3.5rem]">Revolutionizing space technology</h1>
          <p className="mt-[15px]">SpaceX's Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.</p>
          <NavBtn name="Learn more" dest=" " />
        </div>
      </div>

      {/* subpage 3 */}
      <div className="relative flex items-center h-[max(100svh,941px)] w-full">
        <video autoPlay loop preload="auto" poster="" className="w-full h-full object-cover">
          <source type="video/mp4" src="https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4"></source>
        </video>
        <div className="absolute w-full h-full bg-[linear-gradient(270deg,#00000000_50%,#000000cc_100%)]"></div>
        <div className="absolute top-[13%] left-[100px] max-w-[650px]">
          <h1 className="uppercase max-w-[585px] leading-[3rem]">World's leading launch service provider</h1>
          <p className="mt-[15px]">SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity's ability to access space into something as routine as air travel.</p>
          <NavBtn name="Reserve your ride" dest=" " />
        </div>
      </div>

      {/* subpage 4 */}
      <div className="relative flex items-center h-[max(100svh,941px)] w-full">
        <img className="w-full h-full object-cover" src="https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg" alt="subpage4_bg" />
        <div className="absolute top-[13%] right-[100px] max-w-[650px]">
          <h1 className="uppercase max-w-[585px] leading-[3.5rem]">Advancing human spaceflight</h1>
          <p className="mt-[15px]">Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping bulid a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.</p>
          <NavBtn name="Join a Mission" dest=" " />
        </div>
      </div>

      {/* subpage 5 */}
      <div className="relative flex items-center h-[max(100svh,941px)] w-full">
        <video autoPlay loop preload="auto" className="w-full h-full object-cover">
          <source type="video/mp4" src="https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4"></source>
        </video>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,#00000000_50%,#000_100%)]"></div>
        <div className="absolute left-[100px] max-w-[650px]">
          <h1 className="uppercase max-w-[585px] leading-[3rem]">Delivering high-speed internet from space</h1>
          <p className="mt-[15px]">Starlink is the world's most advanced satelite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.</p>
          <NavBtn name="Order now" dest=" " />
        </div>
      </div>
    </div>
  );
}
