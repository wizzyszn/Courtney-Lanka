import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import HeroImage from '../Components/HeroImage'
import logo0 from '../Assets/Technologies/1280px-Go_Logo_Blue 1.png'
import logo1 from '../Assets/Technologies/1280px-Ionic_Logo 1.png'
import logo2 from '../Assets/Technologies//1822px-ISO_C++_Logo 1.png'
import logo3 from '../Assets/Technologies/2560px-Django_logo 1.png'
import logo4 from '../Assets/Technologies/2560px-Node.js_logo 1.png'
import logo5 from '../Assets/Technologies/68747470733a2f2f766567696269742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f657870726573736a732e706e67 1.png'
import logo6 from '../Assets/Technologies/android_logo_PNG3 1.png'
import logo7 from '../Assets/Technologies/angular-logo-icon-png-svg 2.png'
import logo8 from '../Assets/Technologies/c-sharp-c-logo-02F17714BA-seeklogo 1.png'
import logo9 from '../Assets/Technologies//css 1.png'
import logo10 from '../Assets/Technologies/download (1) 1.png'
import logo11 from '../Assets/Technologies/download (2) 1.png'
import logo12 from '../Assets/Technologies/e-icon 1.png'
import logo13 from '../Assets/Technologies/fe5f71c970ef036c3b4407faa9ce6c69_300_550 1.png'
import logo14 from '../Assets/Technologies/Google-flutter-logo 1.png'
import logo15 from '../Assets/Technologies/hadoop 1.png'
import logo16 from '../Assets/Technologies/html 1.png'
import logo17 from '../Assets/Technologies/iOS-Logo-2013 1.png'
import logo18 from '../Assets/Technologies/Java_programming_language_logo 1.png'
import logo19 from '../Assets/Technologies/js 1.png'
import logo20 from '../Assets/Technologies/Kotlin_logo 1.png'
import logo21 from '../Assets/Technologies/laravel-logo 1.png'
import logo22 from '../Assets/Technologies/logo-vuejs-min 1.png'
import logo23 from '../Assets/Technologies/mariadb-logo-vert_blue-transparent 1.png'
import logo24 from '../Assets/Technologies/microsoft-sql-server-logo-96AF49E2B3-seeklogo 1.png'
import logo25 from '../Assets/Technologies/mongodb_logo1-76twgcu2dm 1.png'
import logo26 from '../Assets/Technologies/MySQL-Logo 1.png'
import logo27 from '../Assets/Technologies/OpenCV_logo_black_ 1.png'
import logo28 from '../Assets/Technologies/Oracle-Logo 1.png'
import logo29 from '../Assets/Technologies/PHP-logo.png'
import logo30 from '../Assets/Technologies/postgresql-icon-12 1.png'
import logo31 from '../Assets/Technologies/Python-Symbol.png'
import logo32 from '../Assets/Technologies/react-native 1.png'
import logo33 from '../Assets/Technologies/react_logo 1.png'
import logo34 from '../Assets/Technologies/Redis-Logo 1.png'
import logo35 from '../Assets/Technologies/symfony-logo-png-2 1.png'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import { Context } from '../contexts/AppContext'
import NavBarExtension from '../Components/NavBarExtension'
import Reveal from '../Components/Reveal'
const logos = [logo0,logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25,logo26,logo27,logo28,logo29,logo30,logo31,logo32,logo33,logo34,logo35]

export default function Technologies() {
    const {toggle} = useContext(Context)
  return (
    <>
        <NavBar />
        {
            toggle && (<NavBarExtension />)
        }
        <HeroImage heading='Technologies' paragraph='We specialize in helping you build a team of expert developers.' />
        <div className=' p-32 flex flex-col gap-3 max-[720px]:p-4'>
            <Reveal>
            <h2 className=' font-semibold text-3xl'>Technologies</h2>
            </Reveal>
           <Reveal>
             <p className=' tracking-tight w-[30%] max-[720px]:w-full'>Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity</p>
        
           </Reveal>
        </div>
        <Reveal className=' text-[#9F9F9F] text-sm flex gap-5 items-center p-32 pt-0 max-[720px]:flex-wrap max-[720px]:p-4 w-fit'>
            <p className=' bg-[#FFF856] p-1 rounded-lg font-semibold text-black'>All</p>
            <p>Frontend</p>
            <p>Backend</p>
            <p>Frameworks</p>
            <p>Mobile App</p>
            <p>DataBase</p>
            <p>Google</p>
            <p>Data Science</p>
            <p>Machine Learning</p>
            <p>DevOps</p>
            <p>CMS</p>
            <p>ECommerce</p>
            <p>Security</p>
        </Reveal>
        <Reveal className=' grid grid-cols-6 p-32 gap-9 pt-0 max-[720px]:p-4 max-[720px]:grid-cols-2'>
            {
                logos.map((elem,index) =>{
                    return <div key={index} className=' flex items-center p-2 border-2 justify-center rounded-xl shadow-md'><img src={elem} alt="logo" /></div>
                })
            }
        </Reveal>
        <Form />
        <Footer />
    </>
  )
}
