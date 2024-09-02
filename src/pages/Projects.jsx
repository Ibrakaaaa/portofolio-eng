import React from 'react'
import { FaCode } from 'react-icons/fa'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id='projects' className='text-gray-400  body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40' >
        <div className='flex flex-col w-full mb-20'>
          <FaCode className='mx-auto inline-block  w-10 mb-0 text-9xl' /> 
          <h1 className='font-bold text-white text-3xl'>Apps I've build</h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base py-5'>Below are some of the apps I've developed, each showcasing my skills in React, problem-solving, and user-centered design. These projects highlight my ability to turn ideas into functional, intuitive, and impactful digital solutions..</p>
        </div>

        <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a 
            href={project.link}
            key={project.image}
            target='blank'
            className='sm:w-1/2 w-100 p-4 overflow-hidden h-[20rem]' >

              <div className='flex relative'>
                <img 
                alt='galery'
                src={project.image}
                className='absolute inset-0 w-full h-full object-cover object-center'
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
