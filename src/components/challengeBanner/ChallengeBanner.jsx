import React from 'react'
import "./ChallengeBanner.css"
import ellipse from "../../assets/images/ellipsis.png"
import arrow from "../../assets/images/Arrow.png"

const ChallengeBanner = () => {
  return (
    <section className='challengeBanner'>
      <article className='ellipsisGrid fgrid'>
        <div className='rotateText'><div className='challengeSquare'></div><p>DISCOVER YOUR SKILLS</p></div>
        <div className='underText'><p>EXPLORE</p></div>
      </article>
      <article className='ellipsisGrid'>
        <div className='ellipseSect'>
        <img src={ellipse} className="ellip" />
        <div className='centerText'><p>ACCEPT</p><span>NEW</span><p>CHALLENGES</p></div>
        </div>
        <img src={arrow} className="arrow"/>
       </article>
       <article className='ellipsisGrid lgrid'>
        <div className='rotateText sec'><div className='challengeSquare'></div><p>DISCOVER YOUR SKILLS</p></div>
        <div className='underText'><p>ABOUT</p></div>
      </article>
    </section>
  )
}

export default ChallengeBanner