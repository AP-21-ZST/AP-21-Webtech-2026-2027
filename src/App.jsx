import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  function Header() {
    return (
      <>
        <div>
          <h1>header WebTech</h1>
        </div>
      </>
    )
  }
  
  function Footer() {
    return (
      <>
        <footer>
          <p>Projekt React</p>
        </footer>
      </>
      );
  }
  
  function Technology() {
    return (
      <>
        <main>
          <h2>Technologie</h2>
        </main>
      </>
    )
  }

  return (
    <>
      <Header/>
      <Technology/>
      <Footer/>
    </>
  )
}

export default App
