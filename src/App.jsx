import React from 'react'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import NavbarNavigation from './components/NavbarNavigation'
import AboutMe from './pages/AboutMe'


export default function App() {
  return (
<main className='text-gray-400 bg-gray-900 body-font'>
<NavbarNavigation />
<AboutMe />
<Skills />
<Projects />
<Contact />
</main>  
  )
}



