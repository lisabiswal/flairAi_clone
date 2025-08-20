import Navbar from "./components/Navbar";
import './App.css'
import HeroSec from "./components/HeroSec";
import Marque from "./components/Marque";
import HeroImg from "./components/HeroImg";
import BrandCont from "./components/BrandContent";

export default function App(){
  return(
    <>
      <Navbar/>
      <HeroSec/>
      <HeroImg/>
      <Marque/>
      <BrandCont/>
    </>
  )
}