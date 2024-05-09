import React from 'react'
import logo1 from '../Assets/Expertise/link 1.png'
import logo2 from '../Assets/Expertise/management 1.png'
import logo3 from '../Assets/Expertise/outsourcing 1.png'
import logo4 from '../Assets/Expertise/shield 1.png'
export default function Expertise() {
  return (
    <div className=' p-48 flex flex-col  gap-14 max-[720px]:p-4'>
        <div className=' flex flex-col gap-3 w-[30%] max-[720px]:w-full'>  
            <p className=' font-medium'>Expertise</p>
            <h3 className=' text-3xl font-semibold'>Hire Permanent and Remote Developers</h3>
            <p className='  tracking-tighter'> From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
        </div>
        <div className=' flex justify-between items-center max-[720px]:flex-wrap  max-[720px]:flex-col  max-[720px]:gap-9   '>
            <div className=' flex flex-col gap-4 w-[50%]  max-[720px]:items-center  max-[720px]:text-center'>
                <div><img src={logo1} alt="logo" className=' bg-[#FFF856]' /> </div>
                <h4 className=' text-xl font-medium'>Dedicated Teams</h4>
                <p className=' tracking-tighter'>Find your next team member</p>
            </div>
            <div className=' flex flex-col gap-4 w-[50%] max-[720px]:items-center  max-[720px]:text-center' >
                <div><img src={logo2} alt="logo" className=' bg-[#FFF856]' /></div>
                <h4 className=' text-xl font-medium'>Staff Augmentation</h4>
                <p className=' tracking-tighter'>Build a ditributed development team</p>
            </div>
            <div className=' flex flex-col gap-4 w-[50%] max-[720px]:items-center  max-[720px]:text-center'>
                <div>  <img src={logo3} alt="logo3"className=' bg-[#FFF856]' /></div>
                <h4 className=' text-xl font-medium'>Software Outsourcing</h4>
                <p className=' tracking-tighter'>End-to-End Software Development Outsourcing Solutions</p>
            </div>
            <div className=' flex flex-col gap-4 w-[50%] max-[720px]:items-center  max-[720px]:text-center'>
                <div>  <img src={logo4} alt="logo4"className=' bg-[#FFF856]' /></div>
                <h4 className=' text-xl font-semibold'>Remote Office</h4>
                <p className=' tracking-tighter'>Open your own remote development center and grow your business</p>
            </div>
        </div>
    </div>
  )
}
