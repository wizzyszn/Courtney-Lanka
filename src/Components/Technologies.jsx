import React from 'react'
import react_icon from '../Assets/Techmologies/React_logo_wordmark 1.png'
import angular from '../Assets/Techmologies/angular-logo-icon-png-svg 1.png'
import next from '../Assets/Techmologies/image 3.png'
import nodeJs from '../Assets/Techmologies/image 4.png'
const techs = [react_icon,angular,next,nodeJs]
export default function Technologies() {
  return (
    <div className='p-48 flex flex-col justify-center items-center gap-5'>
        <p>Specialized</p>
        <h3 className=' text-2xl font-semibold'>Technologies</h3>
        <div className=' flex items-center gap-14'>
            {
                techs.map((elem,index)=>{
                    return <div key={index}> <img src={elem} alt="techs" /> </div>
                })
            }
        </div>
    </div>
  )
}
