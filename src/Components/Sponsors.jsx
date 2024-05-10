import React from 'react'
import logo1 from '../Assets/Sponsors/6556297b05974f5b20411210_attentive.svg.png'
import logo2 from '../Assets/Sponsors/6556297b8364e8a5e4dc6dff_Inveterate.svg.png'
import logo3 from '../Assets/Sponsors/6556297c0e59cb674f892791_Klaviyo.svg.png'
import logo4 from '../Assets/Sponsors/6556297c3f91ef46aad9e42f_Yotpo.svg fill.png'
import logo5 from '../Assets/Sponsors/6556297c972f146948f7aaa8_smile.svg.png'
import logo6 from '../Assets/Sponsors/6556297cfadaec9c4d369842_Shopify.svg.png'
import logo7 from '../Assets/Sponsors/6556297d7504a1a52b30a797_adobe.svg.png'
import logo8 from '../Assets/Sponsors/65654fb00bd5f04e20aa8e36_georgias.svg.png'
import logo9 from '../Assets/Sponsors/allcitizens.png'
import logo10 from '../Assets/Sponsors/jenson.png'
import logo11 from '../Assets/Sponsors/longwind.png'
import logo12 from '../Assets/Sponsors/loyalty.png'
import logo13 from '../Assets/Sponsors/rareseeds.png'
import logo14 from '../Assets/Sponsors/simpletire.png'
import logo15 from '../Assets/Sponsors/stamped.png'
import logo16 from '../Assets/Sponsors/unique.png'
import Reveal from './Reveal'
const sponsors = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16
]

export default function Sponsors() {
  return (
    <Reveal className=' p-48 pt-12 pb-12 flex flex-col gap-4 items-center bg-[#F8F8F8]  max-[720px]:p-4'>
        <p>Clients</p>
        <h3 className=' text-2xl font-semibold max-[720px]:text-center'>Amazing clients who trust us</h3>
        <div className=' flex items-center  overflow-hidden '>
            {
                sponsors.map((elem,index) =>{
                    return <div key={index}><img src={elem} alt="sponsors" /> </div>
                })
            }
        </div>
    </Reveal>
  )
}
