import React from 'react'
import "./Footer.css"
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
   <footer>
    <article className='columnFooter'>
        <h1>About</h1>
        <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Mission Statement</li>
            <li>Terms & Condition</li> 
            <li>Privacy Policy</li>
       </ul>
    </article>
    <article className='columnFooter'>
        <h1>What we do</h1>
        <ul>
            <li>News and stories</li>
            <li>Publications</li>
            <li>Take action</li>
            <li>Recomendations</li> 
            <li>Help</li>
       </ul>
    </article>
    <article className='columnFooter thirdFoot'>
        <h1>Sign Up To Receive<br></br>
            Our Newsletter <div className='span'></div>
        </h1>
        <form className='newsInput'>
            <input
                type="text"
                autoFocus
                name="name"
            />
        </form>
        <div className='follow'>
            <p>Follow us!</p>
            <div className='followIcons'>
                <div className='socialIcons'><AiFillInstagram /></div>
                <div className='socialIcons'><FaFacebookF /></div>
                <div className='socialIcons'><AiFillYoutube /></div>
            </div>
          
        </div>
    </article>
    </footer>
  )
}

export default Footer