import React from 'react'
import "./UsersThought.css"
import laura from "../../assets/images/laura.png"
import jhon from "../../assets/images/jhon.png"
import sara from "../../assets/images/sara.png"
import arrow from "../../assets/images/Arrow 1.png"
import { AiFillStar} from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

const UsersThought = () => {
  return (
    <section className='usersThought'>
        <article className='usersTitle'>
            <h1>WHAT</h1>
            <p>users think.</p>
        </article>
        <article className='userSection'>
            <div className='users'>
                    <img src={laura} alt="imgLaura" />
                    <h1>LAURA SMITH</h1>
                <div className='userQualify'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar className='emptyIcon' />
                </div>
                <p><RiDoubleQuotesL className='quots'/>Lorem ipsum dolor sit amet, con<br></br>sectetur adipiscing elit,
                    sed do<br></br> eiusmod tempor incididunt ut<br></br> labore et dolore
                    magna aliqua.<br></br> <RiDoubleQuotesR className='quots foot' />
                </p>
             </div>
             <div className='users'>
                    <img src={jhon} alt="imgJhon" />
                    <h1>JHON SMITH</h1>
                 <div className='userQualify'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar className='emptyIcon' />
                </div>
                <p><RiDoubleQuotesL className='quots'/>Lorem ipsum dolor sit amet, con<br></br>sectetur adipiscing elit,
                    sed do<br></br> eiusmod tempor incididunt ut<br></br> labore et dolore
                    magna aliqua.<br></br> <RiDoubleQuotesR className='quots foot' />
                </p>
             </div>
             <div className='users'>
                    <img src={sara} alt="imgSara" />
                    <h1>SARA SMITH</h1>
                 <div className='userQualify'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar className='emptyIcon' />
                </div>
                <p><RiDoubleQuotesL className='quots'/>Lorem ipsum dolor sit amet, con<br></br>sectetur adipiscing elit,
                    sed do<br></br> eiusmod tempor incididunt ut<br></br> labore et dolore
                    magna aliqua.<br></br> <RiDoubleQuotesR className='quots foot' />
                </p>
             </div>
        </article>
        <article className='footIcons'>
            <img src={arrow} alt="arrow" className='arrow1'/>
            <img src={arrow} alt="arrow" className='arrow2'/>

        </article>
    </section>
  )
}

export default UsersThought