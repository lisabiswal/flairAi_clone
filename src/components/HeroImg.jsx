import heroImg from "../assets/heroImg.png"
export default function HeroImg(){
  return(
    <div className="relative">

    <section className="heroImg">
      <img src={heroImg} alt="" />

    </section>
    </div>
  )
}