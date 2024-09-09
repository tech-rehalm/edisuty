import { useEffect, useState } from "react"
import logo from "../assets/logo.png"
import "./Navbar.css"
import { Link } from "react-scroll"
import icon from "../assets/menu-icon.png"

export default function Navbar() {

  const [dark, setDark] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 150 ? setDark(true) : setDark(false)
    })
  }, [])

  const [mobile, setMobile] = useState(true)
  const tmenu = ()=>{
    setMobile(!mobile)
  }
  
  return (
    <div>
        <nav className={`container  ${dark ?'dark-nav' : ' '} `}>
            <img src={logo} alt="logo" className="logo" />
            <ul className={`${mobile? "" : "mobile"}`}>
                <li><Link smooth={true} to="hero" offset={0} duration={500}>Home</Link></li>
                <li><Link smooth={true} to="programs" offset={-260} duration={500}>Programs</Link></li>
                <li><Link smooth={true} to="about" offset={-150} duration={500}>About Us</Link></li>
                <li><Link smooth={true} to="campus" offset={-260} duration={500}>Campus</Link></li>
                <li><Link smooth={true} to="testimonials" offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link smooth={true} to="contact" offset={-260} duration={500} className="btn">Contact</Link></li>
            </ul>
            <img src={icon} alt=""  className="menu-icon" onClick={tmenu}/>
        </nav>
    </div>
  )
}