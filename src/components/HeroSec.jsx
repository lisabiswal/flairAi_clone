import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function HeroSec() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".head span p", {
      y: 40,
      opacity: 0,
      delay: 0.2,
      duration: 0.4,
      stagger: 0.3,
    });
    tl.from(".secAnim", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    }, "+=0.2");
  });

  return (
    <main>
      <div className="hero">
        <div className="ai-design">
          <h1 className="head">
            <span><p>The</p></span>
            <span><p>AI</p></span>
            <span><p>design</p></span>
            <span><p>tool</p></span>
            <span><p>for</p></span>
            <span><p>product</p></span>
            <span><p>photoshoots</p></span>
          </h1>
        </div>
        <div className="secAnim">
          <div className="tagline">
            <h2>Build stunning AI product content with your team in real-time</h2>
          </div>
          <div className="booking-btn">
            <button className="getStarted">Get Started - It's Free</button>
            <button>Book a Demo</button>
          </div>
        </div>
      </div>
    </main>
  )
}