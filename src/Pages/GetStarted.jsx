import React from 'react'
import NavBar from '../Components/NavBar'
import HeroImage from '../Components/HeroImage'
import conference from '../Assets/online-conference 1.png'
import  support from '../Assets/technical-support 1.png'
import cube from '../Assets/cube 1.png'
import Footer from '../Components/Footer'
import Form from '../Components/Form'

export default function GetStarted() {
  return (
    <>  
        <NavBar />
        <HeroImage paragraph='We specialize in helping you build a team of expert developers.' heading='How to Start' />
        <section className=' p-32 flex flex-col gap-16'>
            <div className=' flex flex-col gap-4 w-[30%]'>
                <h1 className=' text-3xl font-semibold'>How to Get Started with Courtney</h1>
                <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
            </div>
            <div className=' flex  justify-between items-center '>
                <div className=' flex justify-center gap-4 '>
                    <div> <img src={cube} alt="logo" className=' bg-[#FFF856]' /></div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>01. Request</h1>
                        <p className=' w-[65%]'>Tell us more about your requirements and technical needs </p>
                    </div>
                </div>
                <div className=' flex justify-center gap-4'>
                    <div className=' w-[75px]'><img src={conference} alt="logo" className=' bg-[#FFF856]' /></div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>02. Interview</h1>
                        <p className=' w-[60%]'>You interview candidates. Average 2 interviews to hire. </p>
                    </div>
                </div>
                <div className=' flex justify-center gap-4'>
                   <div> <img src={support} alt="logo" className=' bg-[#FFF856]' /> </div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>03. Hire</h1>
                        <p className=' w-[60%]'>You choose who to hire, and we handle all the paperwork.</p>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl font-semibold w-[25%]'>Why You Need To Hire
Remote Developers</h1>
        <div className=' grid grid-cols-3 gap-8'>
            <div><p className=' font-semibold'>&lt; Talent Shortage</p></div>
            <div><p className=' font-semibold'>&lt; Lack of Expertise</p></div>
            <div><p className=' font-semibold'>&lt; Quick Kick-Off</p></div>
            <div><p className=' font-semibold'>&lt; Cost Optimization</p></div>
            <div><p className=' font-semibold'>&lt; Talent Accessibility</p></div>
            <div><p className=' font-semibold'>&lt; Administrative Hassle</p></div>
        </div>
        <div className=' h-[25rem] bg-2 text-white relative'>
            <div className=' absolute top-9 left-9'>  
            <h3 className=' text-6xl font-light tracking-wide'>1000+</h3>
            <p className=' font-medium tracking-wide'>Developers</p>
            </div>
        </div>
        </section>
        <Form />
        <Footer /> 
    </>
  )
}