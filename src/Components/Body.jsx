import React, { useEffect, useState } from 'react'
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
import Reveal from './Reveal'
 const slides = [
        {
          id: 0,
          img: cube,
          title: 'Architect your Solution',
          description: 'Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.'
        },
        {
          id: 1,
          img: software,
          title: 'Engineer your Solution',
          description: 'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.'
        },
        {
          id: 2,
          img: support,
          title: 'ReEngineer your Business Process',
          description: 'Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.'
        }
      ];
export default function Body () {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() =>{
        const interval = setInterval(()=>{
            setCurrentSlide(prevSlide => prevSlide === slides.length - 1 ? 0 : prevSlide + 1)
        }, 3000);
        return () =>{
            clearInterval(interval)
        }
    }, [currentSlide])
   
  return (
    <div className=' min-h-[40rem]'>
        <Reveal className=' grid grid-cols-3 gap-8 p-48 pt-0 max-[720px]:hidden'>
        {slides.map((slide,index)=>{
                return  <div className=' flex gap-6 items-start' key={slide.id}>
                <img src={slide.img} alt="logo" className=' bg-[#FFF856]' />
                <div className=' flex flex-col gap-2'>
                <h3 className=' text-2xl font-semibold'>{slide.title}</h3>
                <p className=' tracking-tight'>{slide.description}</p>
                </div>
              
            </div>
            })
                

            }

        </Reveal>

        <div className=' flex gap-6 items-start max-[720px]:flex-col max-[720px]:items-center max-[720px]:justify-center min-[720px]:hidden max-[720px]:flex max-[720px]:h-[25rem] max-[720px]:p-3 max-[720px]:pt-0  max-[720px]:text-center' key={slides[currentSlide].id}>
                <img src={slides[currentSlide].img} alt="logo" className=' bg-[#FFF856]' />
                <div className=' flex flex-col gap-2'>
                <h3 className=' text-2xl font-semibold'>{slides[currentSlide].title}</h3>
                <p className=' tracking-tight'>{slides[currentSlide].description}</p>
                </div>
        </div>
            <div className=' flex gap-3 justify-center items-center p-3  min-[720px]:hidden'>
                {
                    slides.map((slide, index) =>{
                        return <span key={index} className={`${slides[currentSlide].id === index ? ' h-1 bg-[#9F9F9F] p-1 size-8 rounded-2xl': ' h-1 bg-[#E1E1E1] p-1 size-8 rounded-2xl'}`}></span>
                    })
                }
                    
                    
                    
                  
                </div>
        <Reveal className='h-[30rem] w-full max-[720px]:h-[80rem] max-[720px]:p-20 bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] flex-col max-[720px]:justify-start  flex justify-center items-center gap-6'>
        <div className=' w-[20%] max-[720px]:w-full flex flex-col gap-8 items-center text-center'>
            <Link className=' text-white font-semibold'>How to Start</Link>
            <h3 className=' text-3xl font-semibold'>Easy Process</h3>
            <p>We specialize in helping you build a team of expert developers, testers, and leaders.</p>
        </div>
        <div className=' flex justify-center items-center gap-48 max-[720px]:flex-col max-[720px]:gap-20'>
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

        </Reveal>
        <Expertise />
        <Specialized />
        <Technologies />
        <Sponsors />
        <Form />
      </div>
  )
}
