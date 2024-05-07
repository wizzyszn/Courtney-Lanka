import React from 'react'

export default function HeroImage({heading,paragraph}){
  return (
    <>
         <header className=' w-full h-[30rem] bg border text-white flex justify-center items-center'>
            <div className='flex-col items-center justify-center flex gap-5'>
            <h1 className=' text-5xl font-bold tracking-wide'>{heading}</h1>
         <p className=' w-[70%] text-center'>{paragraph}</p>
            </div>
        </header>
    </>
  )
}
