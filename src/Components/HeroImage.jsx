import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Reveal from './Reveal';

export default function HeroImage({heading,paragraph,width = 'w-[70%]'}){
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState();
  const [defWidth, setDefWidth] = useState(null);
  useEffect(()=> {
    setCurrentRoute(location.pathname);
    if(currentRoute === '/careers'){
      setDefWidth('w-full')
    }
  }, [location.pathname, currentRoute]);

  return (
    <Reveal className=' relative w-full'>
         <header className=' w-full h-[30rem] bg border text-white flex justify-center items-center'>
            <div className='flex-col items-center justify-center flex gap-5'>
            <h1 className=' text-5xl font-bold tracking-wide'>{heading}</h1>
         <p className= {`${width} ${`max-[720px]:${defWidth}`} text-center`} style={{
          width : defWidth
         }}>{paragraph}</p>
            </div>
        </header>
    </Reveal>
  )
}
