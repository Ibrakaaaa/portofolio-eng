import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


function handleSubmit(e) {
e.preventDefault();

if(name, email, message === "") return;

const serviceId = 'service_fkvghs7'
const templateId = 'template_0a645cd'
const publicKey = 'xcZFSMLB7rh15bfIc'

const templateParams = {
  from_name: name,
  from_email: email,
  to_name: "Web Wizard",
  message: message,
};

emailjs.send(serviceId, templateId, templateParams, publicKey).then(
  (response) => {
    alert('Email sent succesfully!', response);
    setName('')
    setEmail('')
    setMessage('')

  },
  (error) => {
    console.log('FAILED...', error);
  },
);


}

  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 lg:h-96 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
        <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.0332267076706!2d11.478479475588275!3d48.10959475310998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd85686410769%3A0x6d17989f18ba3d65!2sWaldgartenstra%C3%9Fe%2036%2C%2081377%20M%C3%BCnchen%2C%20Deutschland!5e0!3m2!1sde!2sus!4v1721256845569!5m2!1sde!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          />
        <div className='bg-gray-900 flex flex-wrap relative py-6 rounded shadow-md'>
          <div className='lg:w-1/2 px-9  '>
          <h2 className='font-semibold text-xs text-white uppercase tracking-widest'>ADDRESS</h2>
          <p className='mt-1'>
            Waldgartenstrasse 36 <br></br>
            83173 Munich
          </p>
          </div>
          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
          <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
            EMAIL
          </h2>
          <a className='text-indigo-400 leading-relaxed'>
            ibrahim.merkezlol@gmail.com
          </a>
          <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
            PHONE
          </h2>
          <p className='leading-relaxed'>
            +49 0173 9719889
          </p>
          </div>
        </div>
        </div>

        <form onSubmit={handleSubmit}
        name="contact"
        className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-1 mt-8 md:mt-0'
        >
          <h2 className='text-white tracking-normal font-semibold text-2xl pb-4'>Hire Me</h2>
          <p className='mb-2 text-sm'>Currently looking for a web developer role. Please reach out if you think I would be a good fit for your team! If you have any other request or question, don’t hesitate to use the form.

.</p>
          <div className='relative mb-4'>
          <label className='leading-7 text-sm text-gray-400'>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} id='name' name='name' className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type='text'></input>
          </div>
          <div className='relative mb-4 '>
          <label className='leading-7 text-sm text-gray-400'>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className=' w-full bg-gray-800 rounded border border-gray-700 py-1 px-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 leading-8 transition-colors duration-200 ease-in-out' type='email'></input>
          </div>
          <div className='relative mb-4 '>
          <label className='leading-7 text-sm text-gray-400'>Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full bg-gray-800 rounded border border-gray-700 text-gray-100 outline-none py-1 px-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 leading-8 transition-colors duration-200 ease-in-out'>

          </textarea>
          </div>
          <button className='bg-indigo-600 mt-4 py-2 rounded-lg text-white hover:bg-indigo-800 transition-colors duration-300 focus:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-800 ' type='submit '>Submit</button>
        </form>
      </div>
    </section>
  )
}
