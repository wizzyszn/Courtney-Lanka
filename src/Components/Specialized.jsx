import React, { useEffect, useState } from 'react'
import { payload } from '../data'
import Reveal from './Reveal';

export default function Specialized() {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() =>{
        const interval = setInterval(()=>{
            setCurrentSlide((prevSlide)=> prevSlide === payload.length -1  ? 0 : prevSlide + 1 );
        }, 3000);
        return () =>{
            clearInterval(interval)
        }
    }, [])
  return (
    <div className=' bg-[#F9F9F9] h-[60rem] p-48  max-[720px]:p-4  max-[720px]:h-[85rem] border-2'>
        <Reveal className=' flex flex-col gap-4 w-[25%]  max-[720px]:w-full'>
            <p className=' font-medium'>Specialized</p>
            <h3 className=' text-3xl font-semibold'>Specialized Staff We Provide</h3>
        </Reveal>
        <Reveal className=' grid grid-cols-4 gap-6  max-[720px]:grid-cols-2  max-[720px]:p-5 mt-8'>
            {
                payload.map((elem, index) =>{
                    return <div className=' flex justify-between border items-center rounded-lg shadow-sm p-2 bg-[#FFFFFF]  border-l-[#FFF856] border-l-[10px]  max-[720px]:tracking-tighter  max-[720px]:text-sm  max-[720px]:gap-3'
                     key={index}> <div><img src={elem.logo} alt="logo" /> </div><p>{elem.name}</p> </div>
                })
            }
        </Reveal>

    </div>
  )
}
