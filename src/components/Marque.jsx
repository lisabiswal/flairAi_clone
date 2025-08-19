import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import mar1 from "../assets/mar1.png"
import mar2 from "../assets/mar2.png"
import mar3 from "../assets/mar3.png"
import mar4 from "../assets/mar4.png"
import mar5 from "../assets/mar5.png"

export default function Marque() {
  useGSAP(() => {
    const scroller = document.querySelector(".inner-scroll");
    scroller.innerHTML += scroller.innerHTML;
    gsap.to(scroller, {
      xPercent: -50,
      duration: 10,
      repeat: -1,
      ease: "linear"
    });
  });

  return (
    <section className="marque-heading">
      <div className="inner-cont">
        <h2>Used by brands of all sizes and industries</h2>
        <div className="scrollx">
          <div className="inner-scroll">
            <ScrollCard img={mar1} />
            <ScrollCard img={mar2} />
            <ScrollCard img={mar3} />
            <ScrollCard img={mar4} />
            <ScrollCard img={mar5} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ScrollCard({ img }) {
  return (
    <div className="scroll-card">
      <img src={img} alt="" width={100} />
    </div>
  )
}