import React from 'react'

const About = () => {
  return (
    <>
    <div id='Banner'></div>
    <div className='mt-[1rem] min-h-[60vh] bg-[#ef069c]'>
        <div className='text-white flex mb-[3rem] flex-wrap mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem]'>
            <h1 className='p-[2rem] text-center'>About Olvera</h1>
            <p className=' text-justify pt-[5rem] p-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi a excepturi libero, culpa ullam tempora eaque, dolorem sit esse ratione suscipit corporis 
                quasi temporibus voluptates accusantium iste, delectus laborum asperiores!
            </p>
        </div>
        <div className="w-[80%] text-center p-[2rem] flex items-center mx-auto grid grid-cols-1 md:grid-cols-4 flex-wrap gap-[1rem]">
            <p className='text-gray'>HOWARDS</p>
            <p className='text-gray'>COMMONWEALTH BANK</p>
            <p className='text-gray'>ELLERY</p>
            <p className='text-gray'>GINGERSMART</p>
        </div>
    </div>
    <div className='flex mb-[3rem] mt-[3rem] flex-wrap mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-[1rem]'>
        <p><span className='font-bold text-[#ef069c]'>150+</span><br/>Projects</p>
        <p><span className='font-bold text-[#ef069c]'>80+</span><br/>Clients</p>
        <p><span className='font-bold text-[#ef069c]'>200+</span><br/>Projects</p>
        <p><span className='font-bold text-[#ef069c]'>97+</span><br/>Clients</p>
    </div>
    </>
  )
}

export default About
