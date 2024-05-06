import React from 'react'
import { payload } from '../data'

export default function Specialized() {
  return (
    <div className=' bg-[#F9F9F9] h-[60rem] p-48'>
        <div className=' flex flex-col gap-4 w-[25%]'>
            <p className=' font-medium'>Specialized</p>
            <h3 className=' text-3xl font-semibold'>Specialized Staff We Provide</h3>
        </div>
        <div className=' grid grid-cols-4 gap-6'>
            {
                payload.map((elem, index) =>{
                    return <div className=' flex justify-between border items-center rounded-lg shadow-sm p-2 bg-[#FFFFFF]  border-l-[#FFF856] border-l-[10px]'
                     key={index}> <div><img src={elem.logo} alt="logo" /> </div><p>{elem.name}</p> </div>
                })
            }
        </div>

    </div>
  )
}
