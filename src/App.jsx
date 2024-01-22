import { useState } from 'react'
import Description from './components/Description'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import About from './components/About'
import Skills from './components/skills'

function App() {
  
  return (
    <>
      <div>
      <Header />
      <Description/>
      <About/>
      <Skills/>
      <Content/>
      </div>
    </>
  )
}

export default App
