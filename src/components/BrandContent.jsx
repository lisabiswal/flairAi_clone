import { document } from "postcss"
import { useEffect } from "react"

export default function BrandCont() {
  return (
    <section className="brand">
      <div className="inner-brand">
        <div className="pH">
          <p>Create content that matches your brand rules and aesthetic.</p>
          <h1>Generate on brand content for all your business needs.</h1>
          <div className="btns">
            <div className="textBtns">
              <buttton className="model" id="selected">On Model Photography</buttton>
              <Btns text="Product Vibes"/>
              <Btns text="Marketing & Ads"/>
              <Btns text="Product Photography"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function Btns({text}){
  return(
    <buttton className="model">{text}</buttton>
  )
}