import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import HeroImage from '../Components/HeroImage'
import Form from '../Components/Form'
import bg from '../Assets/images/Rectangle.png'
import courtney from '../Assets/Logos/logo1.png'
import hr from '../Assets/images/aeecc22a67dac7987a80ac0724658493.jpg'
import ceo from '../Assets/images/beb50368-01d4-402b-8d20-c826a48e2b17.webp'
import Footer  from '../Components/Footer'
import { Context } from '../contexts/AppContext'
import NavBarExtension from '../Components/NavBarExtension'
import Reveal from '../Components/Reveal'
export default function Contact() {
    const {toggle} = useContext(Context)
  return (
    <>
    <NavBar/>
    {
        toggle && <NavBarExtension />
    }

    <HeroImage heading='Contact' paragraph='We specialize in helping you build a team of expert developers.' />
    <Reveal className=' flex flex-col gap-3 p-32 max-[720px]:p-4'>
        <h2 className=' text-3xl font-semibold'>Get in touch</h2>
        <p className=' w-[35%] max-[720px]:w-full'>Please feel free to get in touch with us via any convenient means (phone, whatsapp, email, submit a contact form). We will be glad to answer your questions as soon as possible.</p>
    </Reveal>
    <Form background_Image={bg} />
    <div className=' w-full p-32 pt-0  flex justify-center'>
    <div className='flex gap-48 max-[720px]:gap-20 pt-0 max-[720px]:p-4 max-[720px]:flex-col max-[720px]:items-center justify-between'>
          <Reveal className=' flex flex-col gap-4 justify-center max-[720px]:items-center'>
            <div className=' size-32' ><img src={courtney} alt="logo" /></div>
            <h4 className=' text-2xl font-medium'>Office</h4>
            <p>info@courtney.lk</p>
            <b>+94 011 283 744</b>
          </Reveal>
          <Reveal className=' flex flex-col gap-4 max-[720px]:items-center'>
            <div className=' size-40 object-contain'><img src={hr} alt="avi" className=' rounded-xl' /></div>
            <h4 className=' text-2xl font-medium'>Vishwa</h4>
            <p>Human Resources</p>
            <p>vishwa@courtney.lk</p>
            <b>+94 713 249 222</b>
          </Reveal>
          <Reveal className=' flex flex-col gap-4 mamx-[720px]:items-center'>
            <div className=' size-40 object-contain'><img src={ceo} alt="avi" className=' rounded-xl' /></div>
            <h4 className=' text-2xl  font-medium'>Kasun Perera</h4>
            <p>Founder/CEO</p>
            <p>kasun@courtney.lk</p>
            <b>+44 532 82820 9292</b>
          </Reveal>
          <div></div>
    </div>
   

    </div>
    
    <Footer />
    
       
    </>
  )
}
