import React from 'react'
import "./WhyUs.css"
import centerEllip from "../../assets/images/leftEllipse.png"
import sitting from "../../assets/images/sittingMan.png"
import circle from "../../assets/images/Circle 1.png"

const WhyUs = () => {
  return (
   <section className='whyUs'>
    <article className='threeImg'>
        <img src={centerEllip} className="f_Image" />
        <img src={circle} className="t_Image"/>
        <img src={sitting} className="s_Image" />
    </article>
    <article className='whyText'>
        <h1>Why <span>us.</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua Quis ipsum suspendisse consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua Quis ipsum suspendisse.</p>
        <button className='courseBtn'>READ MORE</button>
    </article>
   </section>
  )
}

export default WhyUs