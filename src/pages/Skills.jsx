import React from 'react'
import { BiChip, BiCheckCircle } from 'react-icons/bi'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id='skills'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='text-center '>
          <BiChip className='mx-auto inline-block w-10 mb-0 text-9xl'/>
          <h1 className='font-bold text-white text-3xl'>Skills & Technologies</h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base py-5'>These are the technologies I've used to build all the projects bellow. All of these technologies were learned online over the course of 18 months, using platforms like Udemy, FreeCodeCamp, Stack Overflow and MDN.</p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
        {skills.map((skill) => (
          <div key={skill} className='p-2 sm:w-1/2 w-full '>
            <div className='bg-gray-800 rounded flex  h-full items-center cursor-pointer hover:bg-gray-700 relative p-2 text-left'>
            <BiCheckCircle className='text-green-400 font-black text-3xl mx-3'  />
           <span className='text-white font-medium text-2l w-full hover:text-green-500 p-4 '>{skill}</span>
           </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
