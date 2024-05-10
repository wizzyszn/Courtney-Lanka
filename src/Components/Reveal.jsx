import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export default function Reveal({children, className}) {
    const mainControls = useAnimation()
    const slideControls = useAnimation()
const ref = useRef(null)
    const inView = useInView(ref, {once : true});
    useEffect(() =>{
        if(inView){
            mainControls.start('visible');
            slideControls.start('visible');
        }
       
    }, [inView])
    console.log("ref : ", ref)
    console.log("isInView : ", inView)
  return (
    <motion.div
    className={className}
    transition={{delay : 0.25, duration : 0.5, ease : 'easeIn', type : 'spring', damping : 10, stiffness : 100,}}
    variants={{visible :{opacity : 1, y : 0}, hidden : {opacity : 0, y : 75}}} 
    animate = {mainControls}
    initial = 'hidden'
    ref={ref}
    style={{
        position : 'relative',
        width : 'fit-content' || '100%',
        overflow : 'hidden'
    }}>
        {children}
    <motion.div 
    variants={{hidden : {left : 0}, visible : {left : '100%'}}}
    transition={{duration : 0.5, ease : 'easeIn'}}
    initial = 'hidden'
    animate = {slideControls}
    style={{
        position : 'absolute',
        top : 0,
        left : 0,
        right : 0,
        bottom : 0,
        background : 'linear-gradient(to right, #FF9900, #F2CB00)',
        zIndex : 20
    }}>

    </motion.div>
    </motion.div>
  )
}
