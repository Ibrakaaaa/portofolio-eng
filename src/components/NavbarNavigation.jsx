import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

export default function NavbarNavigation() {
  return (
    <header className='bg-gray-800 md:sticky  top-0 z-10 p-6'>
        <div className='flex  justify-between container items-center'>
            <nav className=' 	flex flex-wrap items-center text-base justify-center'>
                <ul className='flex space-x-3 min-h-5'>
                    <li>
                <a href='/' className=' "md:mr-auto flex flex-wrap items-center -mt-1 justify-center  min-h-2 text-white font-semibold text-xl '>Merkez Ibrahim</a>
                    </li>
                    <li>
                <a className=' hover:text-white' href='#projects'>Past Work</a>
                    </li>
                    <li>
                <a  className=' hover:text-white' href='#skills'>Skills</a>
                    </li>
                </ul>
            </nav>
            <div className='flex gap-2'>

            <a target='blank' href='https://github.com/Ibrakaaaa' className='flex align-middle justify-center items-center hover:text-white '>
                <GrGithub className='text-3xl'/>
            </a>
            <a href="mailto:ibrahim.merkezlol@gmail.com" className='flex align-middle justify-center items-center hover:text-white'>
                <MdEmail className='text-3xl'/>
            </a>
            </div>
        </div>
    </header>
  )
}
