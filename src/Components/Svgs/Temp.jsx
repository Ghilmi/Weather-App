import React from 'react'
import {motion} from 'framer-motion'
export default function Temp({width='50px' ,height='50px'}) {
  return (
    <div>
        <svg style={{width,height}} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <g id="Temp_High" data-name="Temp High"> <g> 
        <path d="M14.863,13.4V4.939a2.929,2.929,0,0,0-.84-2.03,2.859,2.859,0,0,0-2.23-.82,2.948,2.948,0,0,0-2.66,3l.01,8.28a4.755,4.755,0,0,0,1.9,8.46,5.093,5.093,0,0,0,.95.09,4.759,4.759,0,0,0,4.76-4.75A4.684,4.684,0,0,0,14.863,13.4Zm-.48,6.66a3.783,3.783,0,0,1-3.15.78,3.7,3.7,0,0,1-2.92-2.98,3.745,3.745,0,0,1,1.43-3.69.962.962,0,0,0,.39-.77V5.089a1.968,1.968,0,0,1,1.73-2,.66.66,0,0,1,.14-.01,1.878,1.878,0,0,1,1.86,1.86V13.4a.962.962,0,0,0,.39.77,3.742,3.742,0,0,1,.13,5.89Z"></path> 
        <motion.path
      //   style={{
      //       strokeWidth: 0,
      //       strokeLinecap: 'square',
      //       stroke: 'red',
      //       fill: 'red'
      //   }}
      //   animate={{
      //       strokeWidth:['1px', '1.2px', '1.15px', '1.18px', '1px'],
      //       opacity: [1, 0.2, 0.5, 0.8, 1]
      //   }}
      //   transition={{
      //   duration: 2,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 1
      // }}
        d="M13.893,17.169a1.89,1.89,0,0,1-3.78,0,1.858,1.858,0,0,1,1.39-1.81V5.4a.5.5,0,0,1,1,0v9.96A1.869,1.869,0,0,1,13.893,17.169Z"></motion.path>
         </g> </g> </g></svg>
    </div>
  )
}