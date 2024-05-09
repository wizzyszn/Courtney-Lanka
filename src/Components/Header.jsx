import React from 'react'
import header_img from '../Assets/images/Rectangle 26.png'

import { GoArrowRight } from "react-icons/go";
export default function Header() {
  return (
    <div className=' p-48 pt-6 h-svh mt-2 max-[720px]:p-0 max-[720px]:mt-0 max-[720px]:h-[35rem]'>
        <div className=' relative h-[100%] max-[720px]:flex max-[720px]:flex-col'>   
        <div className=' z-0 absolute right-8 max-[720px]:static'>
            <img src={header_img} alt="header" />
        </div>
        <div className=' flex flex-col gap-4 h-[35rem] w-[40%] max-[720px]:w-full max-[720px]:rounded-none max-[720px]:p-3 z-20 justify-center rounded-tr-[5rem] absolute bg-white top-20 max-[720px]:static max-[720px]:justify-start'>
            <h1 className=' text-6xl max-[720px]:text-3xl max-[720px]:font-semibold'>Building dev team, Quickly and Affordably</h1>
            <p>We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.</p>
            <div className=' w-fit max-[720px]:w-full max-[720px]:justify-center p-2 bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] rounded-lg flex items-center gap-1 cursor-pointer'><span>Build a team</span><GoArrowRight /></div>
        </div>
       
        </div>
        

    </div>
  )
}
