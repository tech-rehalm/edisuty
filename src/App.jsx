import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Video from './components/video/Video'

function App() {
  const [play, setPlay] = useState(false)
  return (
    <>
     <div className="">
      <Navbar/>
      <Hero/>
      <Title  title="What we offer" subTitle="Our Programs"/>
      <Programs/>
      <About setPlay={setPlay}/>
      <Title  title="Campus Photos" subTitle="Gallery"/>
      <Campus/>
      <Title  title="What A Student Says" subTitle="Testimonials"/>
      <Testimonials/>
      <Title  title="Get in touch" subTitle="Contact Us"/>
      <Contact/>
      <Footer/>
      <Video play={play} setPlay={setPlay}/>
     </div>
    </>
  )
}

export default App
