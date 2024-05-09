import React from 'react'
import header_img from '../Assets/images/Rectangle 34.png'
import { GoArrowRight } from "react-icons/go";


export default function Form({background_Image = header_img}) {
  return (
    <>
      <div className=' p-48 pt-9  h-[74rem]  max-[720px]:p-4  max-[720px]:h-[85rem]'>
            <div className=' relative h-[100%]' >   
        <div className=' flex flex-col gap-12 h-[45rem]  w-[40%] z-20  rounded-tl-[5rem] absolute bg-white  top-20 right-0 p-12  max-[720px]:top-60  max-[720px]:left-0  max-[720px]:w-[90%]  max-[720px]:m-auto  max-[720px]:rounded-none '>
            <h1 className=' text-4xl font-semibold  max-[720px]:text-2xl'>Connect With Your Next Great Hire Today!</h1>
            <form className=' flex flex-col gap-8'>
                <div className=' grid grid-cols-2 gap-10 gap-y-12  max-[720px]:grid-cols-1'>
                    <div className=' flex flex-col justify-center'>
                    <label htmlFor="company " className=' font-semibold '>Company</label>
                    <input type="text" name="company" id="company" className=' border-[#C5E0FF] border h-12 rounded-md p-2 ' placeholder="Enter Company's name"  />
                    </div>
                    <div className='flex flex-col justify-center'>
                    <label htmlFor="name" className=' font-semibold'>Your Name</label>
                    <input type="text" name="name" id="name" className=' border-[#C5E0FF] border h-12 rounded-md p-2' placeholder='Enter your Name'/>
                    </div>
                    <div className='flex flex-col justify-center'>
                    <label htmlFor="number" className=' font-semibold'>Phone</label>
                    <input type="text" name="number" id="number"className=' border-[#C5E0FF] border h-12 rounded-md p-2' placeholder='Enter your Phone Number'  />
                    </div>
                    <div className='flex flex-col justify-center'>
                    <label htmlFor="email" className=' font-semibold'>Email</label>
                    <input type="text" name="email" id="email"className=' border-[#C5E0FF] border h-12 rounded-md p-2' placeholder='Enter your Email' />
                    </div>
                   
                </div>
                <div className=' flex flex-col gap-4'>
                    <label htmlFor ="Project"className=' font-semibold'>Project Details</label>
                    <textarea name="Project" id="Project" className=' border-[#C5E0FF] border h-15 rounded-md p-2' placeholder='Describe your Project' />
                </div>
                <div className=' flex gap-3 '>
                    <input type="checkbox" name="agree" id="agree" />
                    <p>By sending this form I confirm that I have read and accept the <b>Privacy Policy</b></p>
                </div>
            </form>
            <div className=' w-fit p-3 bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] rounded-lg flex items-center gap-1 cursor-pointer text-white shadow-md'><span>GET CONSULTATION</span><GoArrowRight /></div>
        </div>
        <div className=' z-0 absolute left-0  max-[720px]:top-0'>
            <img src={background_Image} alt="header" />
        </div>
        </div>
        </div>
    
    </>
  )
}
