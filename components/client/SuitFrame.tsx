'use client'
import { useState } from "react"

const SuitFrame = () => {
  const [currentTab,setCurrentTab] = useState(0)

  const suits = [
    { name:"intravehicular activity (iva)", img:"https://www.spacex.com/assets/images/human-spaceflight/home/the-suit-new.png", alt:"iva_suit" },
    { name:"extravehicular activity (eva)", img:"https://www.spacex.com/assets/images/human-spaceflight/home/the-suit-new-EVA.png", alt:"eva_suit" }
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-[10px] pt-[50px] pb-[30px]">
        <button onClick={() => setCurrentTab(0)} className={
          currentTab == 0 ?
          "uppercase h-fit border-none p-0 bg-transparent font-[600] opacity-100 underline underline-offset-3 hover:cursor-pointer"
          :
          "uppercase h-fit border-none p-0 bg-transparent font-[600] opacity-30 hover:opacity-100 cursor-pointer"
          }>{suits[0].name}</button>

        <p className="opacity-40">|</p>

        <button onClick={() => setCurrentTab(1)} className={
          currentTab == 1 ?
          "uppercase h-fit border-none p-0 bg-transparent font-[600] opacity-100 underline underline-offset-3 hover:cursor-pointer"
          :
          "uppercase h-fit border-none p-0 bg-transparent font-[600] opacity-30 hover:opacity-100 cursor-pointer"
          }>{suits[1].name}</button>
          
      </div>
      <img src={suits[currentTab].img} />
    </div>
    
  )
}

export default SuitFrame