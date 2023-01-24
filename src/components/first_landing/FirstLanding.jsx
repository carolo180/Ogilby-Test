import React from 'react'
import "./FirstLanding.css"
import circle from "../../assets/images/Circle.png"
import main from "../../assets/images/mainImage.png"
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const FirstLanding = () => {
  return (
    <div className='main'>
        <article className='firstGrid'>

            <div className='UI'>
                <h1>UI<span className='point'>.</span></h1>
            </div>

            <div className='begginer'>
                <h4>BEGINNER<span className='lastS'>'s</span></h4>
                <div className='secondBegginer'> <div className='square'></div> <p className='becomeText'>BECOME A <br></br> PRO-DESIGNER</p></div> 
            </div>

            <div className='narrowLeft'>
                 <HiOutlineArrowNarrowLeft className='narrowIcon' />
            </div>

        </article>
        <article className='secondGrid'>
            <img src={circle} className="circle"/>
            <img src={main} className="modelLanding"/>
        </article>

        <article className='thirdGrid'>
            <div className='editSquare'>
                <p>EDITION</p>
                <h1>2022</h1>
            </div>
            <div className='mainText'>
                <h1>START GUIDE FOR BEGINNER<br></br> DESIGNERS</h1>
                <p>Lorem ipsum dolor sit amet, consecte-
                    tur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore.
                </p>
            </div>
            <div className='landingButtons'>
                <button className='startButton'>LET'S START</button>
                <button className='readButton'>READ MORE</button>
            </div>
            <div className='narrowRight'>
              <HiOutlineArrowNarrowRight className='narrowIcon'/>
            </div>
        </article>


    </div>
  )
}

export default FirstLanding