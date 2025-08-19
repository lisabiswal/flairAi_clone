import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function Marque(){
  useGSAP(()=>{
    gsap.fromTo(".scrollx .inner-scroll",{x: "100%"},{
      x: "-0%",
      duration: 10,
      repeat: -1,
      ease: "linear"
    })
  })
  return(
    <section className="marque-heading">
      <div className="inner-cont">
        <h2>Used by brands of all sizes and industries</h2>
        <div className="scrollx">
          
          <div className="inner-scroll">
            <div>jjk</div>
            <div>jjk</div>
            <div>jjk</div>
            <div>jjk</div>

          </div>
        </div>
      </div>
    </section>
  )
}