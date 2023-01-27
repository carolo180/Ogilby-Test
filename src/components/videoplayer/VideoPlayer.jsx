import React from 'react'
import "./VideoPlayer.css"
import ReactPlayer from 'react-player/youtube'
import arrow from "../../assets/images/Arrow 1.png"
import thumbnail from "../../assets/images/thumb.png"

const VideoPlayer = () => {
  return (
    <>
    <div className='sectSquare'><div className='squareVideo'></div></div>
    <section className='videoPlayer'>
        <div className='sectReady'>
            <h1 className='firstTitile'>READY TO<br></br> GET STARTED</h1>
            <img src={arrow} />
        </div>
        <div className='mainVideo'>
        <ReactPlayer 
           url='https://www.youtube.com/watch?v=r_wI-s_vMgM'
           className='react-player'
           muted
           playing={false}
           light={thumbnail}
           playIcon
           width='100%'
           height='100%'
            />
        </div>
        <div className='sectReady'>
           <img src={arrow} className="secondArrow" />
            <h1 className='secondTitle'>READY TO<br></br> GET STARTED</h1>
        </div>
    </section>
    </>
  )
}

export default VideoPlayer