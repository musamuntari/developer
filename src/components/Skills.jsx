import React from 'react'
import conimg from '../assets/c1.jpg'
import javaa from '../assets/java.jpg'
import jevaa from '../assets/jeva.jpg'

const Skills = () => {
  return (
    <div className=' md:gap-4 md:flex h-[900px] md:h-[500px] w-[500px]  md:w-[1250px] text-center m-auto'> 

        <div className='bg-black  hover:scale-90 md:mt-10 m- rounded-2xl h-[250px] w-[400px] m-auto md:h-[400px] md:w-1/3 bag4'>
        <h1 className='text-red-200 mt-10 text-2xl md:text-3xl'>#Html</h1>
        <p className='text-white'>Lorem ipsum Lorem ipsum<br></br> dolor sit </p>
        <button className='bg-red-400 w-20 rounded-3xl  hover:bg-slate-300'>Learn</button>
        </div> 

        <div className='bg-black bag3 hover:scale-90 md:mt-10 m-auto rounded-2xl h-[300px] w-[400px] md:h-[400px] md:w-1/3 '>
        <h1 className='text-red-200 mt-10 text-2xl  md:text-3xl'>#Css</h1>
        <p className='text-gray-300 md:text-white'>Lorem ipsum Lorem ipsum<br></br> dolor sit </p>
        <button className='bg-red-400 w-20 rounded-3xl hover:bg-slate-300'>Learn</button>
        </div>

        <div className='bg-black hover:scale-90 md:mt-10 m-auto rounded-2xl h-[250px] w-[400px] md:h-[400px] md:w-1/3 bag5'>

        <h1 className='text-red-200 mt-10 text-2xl md:text-3xl'>##JavaScript</h1>
        <p className='text-white'>Lorem ipsum Lorem ipsum<br></br> dolor sit </p>
        <button className='bg-red-400 w-20 rounded-3xl hover:bg-slate-300'>Learn</button>
        </div>
    </div>
  )
}

export default Skills