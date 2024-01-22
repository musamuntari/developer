import React from 'react'
const about = () => {
  return (
    <div className=' bg-black md:grid-col-1/2 md:flex h- md:h-[400px] gap-2 md:m m-auto md:w-[1250px] w-[480px] '>
        <div className='b-bottom md:w-1/2 bag2 text-white w-[480px] m-auto md:h-[400px] h-[300px] '>
          <h1 className='text-center text-red-200 font-semibold -500 m-auto p-20 text-5xl'>FreeLearn <br></br>Best<br></br> Website</h1>
          </div> 
        <div className=' b-gray-900 h-[450px]  m-auto md:h-[500px] w-1/2'>
            <h1 className='text-white text-5xl mt-7 text-center'>About Us</h1>
            <br></br>
            <p className='text-white text-justify ml-2 hover:text-red-200  '> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Sunt, repudiandae? Magni<br></br>quaerat esse quo consequuntur recusandae ab molestias impedit <br></br>laborum praesentium fuga. Sunt laboriosam inventore, quis architecto sit<br></br> mollitia doloremque. Lorem ipsum dolor, <br></br>sit amet consectetur adipisicing elit. Omnis, ipsum qui<br></br>! Quisquam nisi ex ad quia eum vel esse a?</p>
        </div>
    </div>
  )
}

export default about