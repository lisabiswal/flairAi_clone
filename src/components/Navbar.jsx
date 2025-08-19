import { useEffect, useState } from "react"
import logo from "../assets/favicon.svg"
export default function Navbar() {
  const [scroll,setScroll] = useState(false)
  useEffect(()=>{
    const handelScroll = ()=>{
      if(window.scrollY > 0){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    window.addEventListener("scroll",handelScroll)
    return () => {
      window.removeEventListener("scroll", handelScroll);
    }
  },[])

  return (
    <header>
      <nav>
        
        <div className="left-side">
          <img src={logo} alt="website logo" />
          <h2>Flair.ai</h2>
        </div>
        <ul className="right-side">
          <li>Features <i className="ri-arrow-down-wide-line"></i></li>
          <li>Pricing</li>
          <li>Enterpise</li>
          <li>Community Gallery</li>
          <li>Resources <i className="ri-arrow-down-wide-line"></i></li>
          <li>
            <button style={{backgroundColor: scroll ? "#85cc16": "#161616", color: scroll ? "#161616": "" }}>Try Flair AI for free</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}