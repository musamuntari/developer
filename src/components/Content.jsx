import React from 'react'
import conimg from '../assets/c1.jpg'
import javaa from '../assets/java.jpg'
import jevaa from '../assets/jeva.jpg'
import '../App.css'

const content = () => {
  return (
    <div className='md:grid-col- md: bg-black h-[650px] w-[1250px] m-auto mt-1'>
      <h1 className='text-white text-center text-4xl '>What People Are Saying</h1>

      <div className=' b-bottom bg-red-2 gap-2 flex items-center h-[200px] text-1xl rounded-full border-y-2 hover:text-red-200 text-white'><img clas className= 'h-[100px] rounded-full' src={javaa} alt="" /> <h1 className='text-red-400'> Eng. Tunde:</h1><br></br><br></br>
      <p>Ppsum dolor, sit amet consectetur <br></br>adipisicing elit. Laborum ratione sint modi vel.</p></div>

      <div className=' b-bottom mt-3 gap-2 flex items-center border-y-2 rounded-full text-white hover:text-red-200 text-1xl h-[200px]'><img className='h-[80px]  rounded-full' src={conimg} alt="" /><h1 className='text-red-400'> Bar. John:</h1><br></br> Lorem ipsum dolor, sit amet consectetur <br></br>adipisicing elit. Laborum ratione sint modi vel.</div>

      <div className=' text-white rounded-full border-y-2  gap-3 hover:text-red-200 b-bottom mt-3 flex items-center  text-1xl h-[200px]'><img className='h-[100px]  rounded-full' src={jevaa} alt="" /><h1 className='text-red-400'> Mr. Onye:</h1><br></br> Rpsum dolor, sit amet consectetur <br></br>adipisicing elit. Laborum ratione sint modi vel.</div>
      
        </div>
    
  )
}

export default content