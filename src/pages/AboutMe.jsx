import React from 'react'
import resumeEnglish from '../assets/CV-English.pdf'
import portofolioJpg from '../../images/ICH.jpeg'
export default function AboutMe() {
  return (
    <section id='about'>
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
        <h1 className="title-font sm:text-6xl text-3xl pb-3 font-bold text-white">Hi, i'm Ibrahim <br className="hidden lg:inline-block"></br>
        </h1>
        <h6 className='py-6 text-xl'>Front-End Developer</h6>
        <p className="mb-8 leading-relaxed">I build websites and React Apps. I enjoy deep dives into technical documentation and scratching my head until I solve JavaScript problems. Being self taught pushed me to take a proactive approach to problem-solving.

</p>

    <div>
        <button className="bg-green-500 text-white capitalize px-8 py-3 text-base  focus:outline-none hover:bg-green-600 rounded border-0">
          <a href="/#contact">Work with me</a>
        </button>
        <button  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white capitalize rounded text-lg">
          <a href={resumeEnglish} download='resume'>Download my Resume</a>
        </button>
    </div>
      </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
        <img className="object-cover object-center rounded-full h-96 w-96" src={portofolioJpg} alt="hero-image" />
    </div>
    </div>
  </section>
  )
}
