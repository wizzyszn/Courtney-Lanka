import React from 'react'
import { Link } from 'react-router-dom'
import message from '../Assets/Logos/Group-1.png'
import gear from '../Assets/Logos/Group.png'
import handshake from '../Assets/Logos/handshake 3.png'
import medal from '../Assets/Logos/medal 3.png'
import cube from '../Assets/Logos/cube 1.png'
import software from '../Assets/Logos/software-application 1.png'
import support from '../Assets/Logos/technical-support 1.png'
import Expertise from './Expertise'
import Specialized from './Specialized'
import Technologies from './Technologies'
import Sponsors from './Sponsors'
import Form from './Form'
export default function Body () {
  return (
    <div className=' min-h-[40rem]'>
        <div className=' grid grid-cols-3 gap-8 p-48 pt-0'>
            <div className=' flex gap-6 items-start '>
                <img src={cube} alt="logo" className=' bg-[#FFF856]' />
                <div className=' flex flex-col gap-2'>
                <h3 className=' text-2xl font-semibold'>Architect your Solution</h3>
                <p className=' tracking-tight'>Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your
business. We design a strategic roadmap to guide your result-oriented goals.</p>
                </div>
              
            </div>
            <div className=' flex gap-6 items-start'>
                <img src={software}  alt="logo" className=' bg-[#FFF856]' />
                
                <div className=' flex flex-col gap-2'>
                <h3 className=' text-2xl font-semibold'>Architect your Solution</h3>
                <p className=' tracking-tight'> We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create
the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and
industry-specific experience.</p>
                </div>
              
            </div>
            <div className=' flex gap-6 items-start'>
                <img src={support} alt="logo" className=' bg-[#FFF856]' />
                <div className=' flex flex-col gap-2'>
                <h3 className=' text-2xl font-semibold'>Architect your Solution</h3>
                <p className=' tracking-tight'>Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
process places the foundation for a more efficient and strong business that can meet demands at scale.</p>
                </div>
              
            </div>
        </div>
        <div className='h-[30rem] bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] flex-col flex justify-center items-center gap-6'>
        <div className=' w-[20%] flex flex-col gap-8 items-center text-center'>
            <Link className=' text-white font-semibold'>How to Start</Link>
            <h3 className=' text-3xl font-semibold'>Easy Process</h3>
            <p>We specialize in helping you build a team of expert developers, testers, and leaders.</p>
        </div>
        <div className=' flex justify-center items-center gap-48 '>
            <div className=' flex flex-col gap-3 justify-center items-center'>
                <img src={message} alt="logo" />
                <h5 className=' text-xl font-semibold'><b>01</b> YOU ASK</h5>
            </div>
            <div className=' flex flex-col gap-3 justify-center items-center'>
                <img src={gear} alt="logo" />
                <h5 className=' text-xl font-semibold'><b>02</b> WE PROCEED</h5>
            </div>
            <div className=' flex flex-col gap-3 justify-center items-center'>
                <img src={handshake} alt="logo" />
                <h5 className=' text-xl font-semibold'><b>03</b> Negotiate</h5>
            </div>
            <div className=' flex flex-col gap-3 justify-center items-center'>
                <img src={medal} alt="logo" />
                <h5 className=' text-xl font-semibold'><b>04</b> YOU GET</h5>
            </div>
        </div>

        </div>
        <Expertise />
        <Specialized />
        <Technologies />
        <Sponsors />
        <Form />
      </div>
  )
}
