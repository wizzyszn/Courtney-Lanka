import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import HeroImage from '../Components/HeroImage'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import { Context } from '../contexts/AppContext'
import NavBarExtension from '../Components/NavBarExtension'
import Reveal from '../Components/Reveal'

export default function Careers () {
  const { toggle } = useContext(Context)
  return (
    <div>
      <NavBar />
      {toggle && <NavBarExtension />}
      <HeroImage
        width=' w-[50%]'
        heading='Careers'
        paragraph="Do you want to learn more about Courtney? Our team is looking for people who want to work on interesting international projects, develop and learn new skills, and share what they've learned with others."
      />
      <Reveal className=' p-32 flex flex-col  gap-4 max-[720px]:p-4'>
        <h1 className=' text-3xl font-semibold'>Please join us</h1>
        <p>Take a look at the open positions below.</p>
        <p className=' w-[50%] max-[720px]:w-full'>
          if none of them suit you, or you feel you could help us in other ways,
          please fill out the form below or contact us directly at
          carrers@courtney.lk
        </p>
      </Reveal>
      <Reveal>
        <h3 className=' text-2xl font-semibold m-32 mt-0 mb-[-60px] max-[720px]:m-4'>
          Developers
        </h3>
      </Reveal>
      <div className='m-32 pt-0 w-[80%] bg-[#FBFBFB] max-[720px]:w-full max-[720px]:m-4'>
        <Reveal className=' grid grid-cols-3 p-3 gap-4 max-[720px]:hidden'>
          <div className=' col-span-3 grid grid-cols-3 border-b-2 shadom-md p-2 justify-evenly'>
            <p>ROLE</p>
            <p>SKILLS</p>
            <p className=' justify-self-center'>LOCATION</p>
          </div>
          <div className=' flex flex-col gap-4 col-span-1'>
            <h1 className=' text-2xl font-semibold'>
              Senior Web Full Stack Developer
            </h1>
            <p>
              Seniority in development is not just about how much time you have
              already spent behind the computer screen. It's the way you think,
              how you approach problems and their solutions, the responsibility
              you take on and feel.
            </p>
            <div className='  space-x-5'>
              <button className=' text-white font-medium text-left  bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] p-3 rounded-lg'>
                APPLY NOW
              </button>
              <button className=' text-left p-3 rounded-lg bg-[#F3F3F3] font-medium'>
                LEARN MORE
              </button>
            </div>
          </div>
          <div className=' flex flex-wrap gap-8 col-start-2 col-end-2'>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Node.js
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              React js
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Vue js
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Typescript
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Javascript
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Next JS
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Amplify
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              AWS{' '}
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Terraform{' '}
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              {' '}
              C# and .NET
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              GraphQL{' '}
            </p>
            <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
              Serverless Framework
            </p>
          </div>
          <div className=' justify-self-center'>
            <b>Remote</b>
            <p>
              <b>Ostrava</b> - Czech Republic
            </p>
            <p>
              <b>Brno</b> - Czech Republic
            </p>
            <p>
              <b>Barcelona</b> - Spain
            </p>
            <p>
              <b>Prague</b> - Czech Republic
            </p>
            <p>
              <b>Zlin</b> - Czech Republic
            </p>
          </div>
        </Reveal>
        <Reveal className=' flex flex-col p-3 gap-9 min-[720px]:hidden'>
          <div className=' flex flex-col gap-4 '>
            <p className=' text-lg font-medium'>ROLE</p>
            <h1 className=' text-2xl font-semibold'>
              Senior Web Full Stack Developer
            </h1>
            <p>
              Seniority in development is not just about how much time you have
              already spent behind the computer screen. It's the way you think,
              how you approach problems and their solutions, the responsibility
              you take on and feel.
            </p>
          </div>
          <div className=' flex flex-col space-y-8 '>
            <p className=' text-lg font-medium'>SKILLS</p>
            <div className='flex flex-wrap gap-8 '>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Node.js
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                React js
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Vue js
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Typescript
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Javascript
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Next JS
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Amplify
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                AWS{' '}
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Terraform{' '}
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                {' '}
                C# and .NET
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                GraphQL{' '}
              </p>
              <p className=' p-2 bg-[#FFF856] border text-center text-sm font-semibold w-fit h-fit flex justify-center items-center rounded-xl'>
                Serverless Framework
              </p>
            </div>
          </div>
          <div className=' flex flex-col gap-7'>
            <p className=' text-lg font-medium'>LOCATION</p>
            <div className=' flex  flex-col space-y-5'>
              <b>Remote</b>
              <p>
                <b>Ostrava</b> - Czech Republic
              </p>
              <p>
                <b>Brno</b> - Czech Republic
              </p>
              <p>
                <b>Barcelona</b> - Spain
              </p>
              <p>
                <b>Prague</b> - Czech Republic
              </p>
              <p>
                <b>Zlin</b> - Czech Republic
              </p>
            </div>
            <div className='  space-x-5 mt-5'>
              <button className=' text-white font-medium text-left  bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] p-3 rounded-lg'>
                APPLY NOW
              </button>
              <button className=' text-left p-3 rounded-lg bg-[#F3F3F3] font-medium'>
                LEARN MORE
              </button>
            </div>
          </div>
        </Reveal>
      </div>
      <Form />
      <Footer />
    </div>
  )
}
