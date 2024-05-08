import React from 'react'
import NavBar from '../Components/NavBar'
import HeroImage from '../Components/HeroImage'
import Form from '../Components/Form'
import bg from '../Assets/images/Rectangle.png'
import courtney from '../Assets/Logos/logo1.png'
import hr from '../Assets/images/aeecc22a67dac7987a80ac0724658493.jpg'
import ceo from '../Assets/images/beb50368-01d4-402b-8d20-c826a48e2b17.webp'
import Footer, { logos } from '../Components/Footer'
export default function Contact() {
  return (
    <>
    <NavBar/>
    <HeroImage heading='Contact' paragraph='We specialize in helping you build a team of expert developers.' />
    <div className=' flex flex-col gap-3 p-32'>
        <h2 className=' text-3xl font-semibold'>Get in touch</h2>
        <p className=' w-[35%]'>Please feel free to get in touch with us via any convenient means (phone, whatsapp, email, submit a contact form). We will be glad to answer your questions as soon as possible.</p>
    </div>
    <Form background_Image={bg} />
    <div className='flex gap-20 justify-between p-32 pt-0'>
          <div className=' flex flex-col gap-4 justify-center'>
            <div className=' size-32' ><img src={courtney} alt="logo" /></div>
            <h4 className=' text-2xl font-medium'>Office</h4>
            <p>info@courtney.lk</p>
            <b>+94 011 283 744</b>
          </div>
          <div className=' flex flex-col gap-4'>
            <div className=' size-40 object-contain'><img src={hr} alt="avi" className=' rounded-xl' /></div>
            <h4 className=' text-2xl font-medium'>Vishwa Liyanapathirana</h4>
            <p>Human Resources</p>
            <p>vishwa@courtney.lk</p>
            <b>+94 713 249 222</b>
          </div>
          <div className=' flex flex-col gap-4'>
            <div className=' size-40 object-contain'><img src={ceo} alt="avi" className=' rounded-xl' /></div>
            <h4 className=' text-2xl  font-medium'>Kasun Perera</h4>
            <p>Founder/CEO</p>
            <p>kasun@courtney.lk</p>
            <b>+44 532 82820 9292</b>
          </div>
          <div></div>
    </div>
    <div className=' p-36 flex gap-4 flex-col'>
        <h2 className=' text-3xl font-semibold'>Follow us</h2>
        <div className=' flex gap-9'>
                {
                    logos.map((elem,index) =>{
                        return <div key={index} className=' scale-125'><img src={elem} alt="logo" /></div>
                    })

                }
            </div>
    </div>
    <Footer />
    
       
    </>
  )
}
