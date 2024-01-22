import React from 'react'
// import Abouts from '../assets/cod1.jpg'
const About = () => {
  return (
    <div className=' b-bottom bag bg-red-400 gap- md:flex justify-betwee text-green-950 h-[250px] md:h-[400px] md:max-w-[1250px]  max-w-[500px] m-auto'>
        <div className=' w-1/2 m-auto text-3xl md:text-5xl font-bold  text-white' > I`am Muntari Musa<br></br> The Founder of FreeLearn Website <br></br>
        <button className='text-xl border-y-8 w-20 rounded-3xl bg-red-400'>Book</button>
         </div> 

        {/* <div className=' w-1/3 m-auto'> <img className=' rounded-full border-x-8 border-red-200 h-[400px] hover:scale-90' src={Abouts} alt="" /> </div> */}
    </div>
  )
}

export default About