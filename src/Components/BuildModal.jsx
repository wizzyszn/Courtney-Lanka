import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function BuildModal () {
  return (
    <AnimatePresence mode='wait'>
      <motion.div 
      id ="modal"
      initial ={{opacity : 0, scale : 0}}
      animate ={{opacity : 1, scale : 1}}
      transition={{duration: 0.2, ease :'easeIn'}}
      exit={{opacity: 0, scale : 0,}}
      
      className=' bg-white shadow-xl rounded-lg w-[50%] m-auto h-[40rem] fixed top-[15rem] z-[1000] p-8 max-[720px]:w-[90%] max-[720px]:top-[10rem] max-[720px]:h-[6  0%] overflow-auto'>
        <div className=' flex flex-col gap-6'>
        <div className=' flex flex-col gap-3'>
        <h1 className=' text-3xl font-semibold'>Build a team</h1>
        <p>We specialize in helping you build a team.</p>
        </div>
        <div className=' flex w-[50%] shadow-md max-[720px]:w-full'>
          <button className=' bg-[#F99600] p-3 flex-1 rounded-tl-lg rounded-bl-lg'>Option 1</button>
          <button className='bg-white p-3 flex-1 rounded-tr-lg rounded-br-lg'>Option 2</button>
        </div>
        <form className=' flex justify-between gap-8 max-[720px]:flex-col'>
            <div className=' flex flex-col gap-3 w-full flex-1'>
              <label htmlFor="company" className=' font-semibold'>Company</label>
              <input type="text" name="company" id="company" className=' border-[#C5E0FF] border h-[3rem] p-1' placeholder="Enter your company's name" />
            </div>
            <div className=' flex flex-col gap-3 w-full flex-1'>
              <label htmlFor="name" className=' font-semibold'>Your Name</label>
              <input type="text" name="name" id="name" className=' border-[#C5E0FF] border h-[3rem] p-1' placeholder=' Enter your name' />
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
