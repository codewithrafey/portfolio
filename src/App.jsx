import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {

  return (
    <>
    <Home />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
    </>
  )
}

export default App
