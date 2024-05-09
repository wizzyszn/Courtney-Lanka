import React from 'react'
import logo from '../Assets/Logos/logo1.png'
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import instagram from '../Assets/footer/Instagram.png'
import facebook from '../Assets/footer/Facebook.png'
import twitter from '../Assets/footer/Twitter.png'
import youtube from '../Assets/footer/YouTube.png'
export const logos = [instagram,facebook,twitter,youtube]
export default function Footer() {
  return (
    <div className=' p-44 pt-0 pb-10  max-[720px]:p-0'>
        <div className='  border-[#C4C4C4] shadow-sm border-t border-b p-4'>
        <div className='flex justify-between  max-[720px]:flex-col  max-[720px]:gap-20'>
        <div className=' flex flex-col gap-5 max-[720px]:gap-9'>
            <div><img src={logo} alt="" /></div>
            <p className=' w-[50%] max-[720px]:w-full'>Expertly trained, battle-tested, elite software developers on demand</p>
            <div className=' flex items-center gap-3'><MdOutlinePhoneEnabled /><p>+94 713249222</p></div>
            <div className='flex items-center gap-3'><GoMail /><p>hello@courtney.lk</p></div>
            <div className=' flex items-center gap-3'><IoLocationOutline /> <p>Courtney Lanka (Private) LimitedLevel 35World Trade CenterColombo 01</p></div>
            
        </div>
        <div className=' flex flex-col gap-5'>
            <h1 className=' text-xl font-semibold'>Company</h1>
            <p>About Us</p>
            <p>Success Stories</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
        </div>
        <div className=' flex flex-col gap-5'>
            <h1 className=' text-xl font-semibold'>Services</h1>
            <p>Hire Permanent Staff</p>
            <p>Staff Augmentation</p>
            <p>Software Outsourcing</p>
            <p>Build Remote Office</p>
        
        </div>
        <div className=' flex flex-col gap-5'>
            <h1 className=' text-xl font-semibold'>How to Start</h1>
            <p>You Asked</p>
            <p>We Proceed</p>
            <p>Negotiate </p>
            <p>You Get</p>
        </div>
        </div>
        <div className=' flex flex-col gap-3 mt-20'>
            <p className=' font-semibold'>Follow us</p>
            <div className=' flex gap-4 max-[720px]:justify-around'>
                {
                    logos.map((elem,index) =>{
                        return <div key={index}><img src={elem} alt="logo" /></div>
                    })

                }
            </div>
        </div>
 

        </div>
               <div className=' p-4  mt-5 max-[720px]:m-0'> 
        <p className=''>© 2022 courtney</p>
        </div>
            
            </div>
  )
}