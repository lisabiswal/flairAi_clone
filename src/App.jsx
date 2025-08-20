import Navbar from "./components/Navbar";
import './App.css'
import HeroSec from "./components/HeroSec";
import Marque from "./components/Marque";
import HeroImg from "./components/HeroImg";

export default function App(){
  return(
    <>
      <Navbar/>
      <HeroSec/>
      <HeroImg/>
      <Marque/>
    </>
  )
}