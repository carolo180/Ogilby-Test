import React from 'react'
import "./AboutUs.css"
import circle1 from "../../assets/images/Circle 1.png"
import man from "../../assets/images/Image.png"
import ellipsis from "../../assets/images/ellipsis.png"

const AboutUs = () => {
  return (
    <div className='contain'>
    <section className='ellipseBackground'><div className='firstCircle'></div></section>
    <section className='aboutUs'>
        <article className='aboutText'>
            <h1>About<span>us.</span></h1>
            <p>Lorem ipsum dolor sit amet, consecte-
                tur adipiscing<br></br> elit, sed do eiusmod tempor 
                incididunt ut labore et<br></br> dolore magna aliqua
                Quis ipsum suspendisse.
            </p>
            <div className='listAbout'>
                <ul>
                    <li>    LOREM IPSUM DOLOR</li>
                    <li>    LOREM IPSUM DOLOR</li>
                </ul>
                <ul>
                    <li>    LOREM IPSUM DOLOR</li>
                    <li>    LOREM IPSUM DOLOR</li>
                </ul>
            </div>
            <button className='aboutButton'>READ MORE</button>
        </article>
        <article className='aboutImg'>
          <img src={circle1} className="circleAbout"/>
          <img src={man} className="manAbout" />
        </article>
    </section>
   <section className='backEllipse'>
      <div className='lastCircle'></div>
   </section>
    </div>
  )
}

export default AboutUs