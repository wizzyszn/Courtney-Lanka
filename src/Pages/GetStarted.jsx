import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import HeroImage from '../Components/HeroImage'
import conference from '../Assets/online-conference 1.png'
import  support from '../Assets/technical-support 1.png'
import cube from '../Assets/cube 1.png'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import { Context } from '../contexts/AppContext'
import NavBarExtension from '../Components/NavBarExtension'
import Reveal from '../Components/Reveal'

export default function GetStarted() {
    const {toggle} = useContext(Context)
  return (
    <>  
        <NavBar />
        {
            toggle && (<NavBarExtension />)
        }
        <HeroImage paragraph='We specialize in helping you build a team of expert developers.' heading='How to Start' />
        <section className=' p-32 flex flex-col gap-16 max-[720px]:p-4'>
            <Reveal className=' flex flex-col gap-4 w-[30%] max-[720px]:w-full'>
                <h1 className=' text-3xl font-semibold'>How to Get Started with Courtney</h1>
                <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
            </Reveal>
            <div className=' flex justify-between items-center max-[720px]:flex-col max-[720px]:gap-8'>
                <Reveal className=' flex justify-center gap-4'>
                    <div> <img src={cube} alt="logo" className=' bg-[#FFF856]' /></div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>01. Request</h1>
                        <p className=' w-[65%] max-[720px]:w-full'>Tell us more about your requirements and technical needs </p>
                    </div>
                </Reveal>
                <Reveal className=' flex justify-center gap-4'>
                    <div className=' w-[75px]'><img src={conference} alt="logo" className=' bg-[#FFF856]' /></div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>02. Interview</h1>
                        <p className=' w-[60%] max-[720px]:w-full'>You interview candidates. Average 2 interviews to hire. </p>
                    </div>
                </Reveal>
                <Reveal className=' flex justify-center gap-4'>
                   <div> <img src={support} alt="logo" className=' bg-[#FFF856]' /> </div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>03. Hire</h1>
                        <p className=' w-[60%] max-[720px]:w-full'>You choose who to hire, and we handle all the paperwork.</p>
                    </div>
                </Reveal>
            </div>
            <Reveal className='text-3xl font-semibold w-[25%] max-[720px]:w-full'>
            <h1>Why You Need To Hire
Remote Developers</h1>
            </Reveal>
            
        <Reveal className=' grid grid-cols-3 gap-8 max-[720px]:grid-cols-2 w-full'>
            <div><p className=' font-semibold'>&lt; Talent Shortage</p></div>
            <div><p className=' font-semibold'>&lt; Lack of Expertise</p></div>
            <div><p className=' font-semibold'>&lt; Quick Kick-Off</p></div>
            <div><p className=' font-semibold'>&lt; Cost Optimization</p></div>
            <div><p className=' font-semibold'>&lt; Talent Accessibility</p></div>
            <div><p className=' font-semibold'>&lt; Administrative Hassle</p></div>
        </Reveal>
        <Reveal className=' h-[25rem] bg-2 text-white relative w-full'>
            <div className=' absolute top-9 left-9'>  
            <h3 className=' text-6xl font-light tracking-wide'>1000+</h3>
            <p className=' font-medium tracking-wide'>Developers</p>
            </div>
        </Reveal>
        </section>
        <Form />
        <Footer /> 
    </>
  )
}