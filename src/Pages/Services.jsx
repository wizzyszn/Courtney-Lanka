import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import HeroImage from '../Components/HeroImage'
import logo1 from '../Assets/Services/link 1.png'
import management from '../Assets/Services/management 1.png'
import outsourcing from '../Assets/Services/outsourcing 1.png'
import shield from '../Assets/Services/shield 1.png'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import { Context } from '../contexts/AppContext'
import NavBarExtension from '../Components/NavBarExtension'
export default function Services() {
    const {toggle} = useContext(Context)
  return (
    <div>
        <NavBar />
        {toggle && (<NavBarExtension />)}
        <HeroImage heading='Our Services' paragraph='We specialize in helping you build a team of expert developers.' />
        <section className=' p-32 flex flex-col gap-4 w-[40%]'>
        <h1 className=' text-3xl font-semibold'>Hire Permanent and Remote Developers</h1>
        <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
        </section>
        <div className=' grid grid-cols-2 p-32 pt-0 gap-8'>
                <div className=' flex justify-center gap-4'>
                    <img src={logo1} alt="logo" className=' bg-[#FFF856] h-[35%]' />
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>Dedicated Teams</h1>
                        <p className=' w-[65%]'>Building an extended team with Courtney is just like opening your own remote development center, but without the hassle. </p>
                    </div>
                </div>
                <div className=' flex justify-center gap-4'>
                    <img src={management} alt="logo" className=' bg-[#FFF856] h-[35%] ' />
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>Staff Augmentation</h1>
                        <p className=' w-[60%]'>IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.</p>
                    </div>
                </div>
                <div className=' flex gap-4 justify-center'>
                   <img src={outsourcing} alt="logo" className=' bg-[#FFF856] h-[35%]' /> 
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>Software Outsourcing</h1>
                        <p className=' w-[60%]'>Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting..</p>
                    </div>
                </div>
                <div className='flex gap-4 justify-center'>
                <img src={shield} alt="logo" className=' bg-[#FFF856] h-[35%]' />
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>Remote Office</h1>
                        <p className=' w-[60%]'>Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom.
</p>
                    </div>
                </div>
            </div>
            <Form />
            <Footer />
          
    </div>
  )
}
