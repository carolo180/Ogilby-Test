import React from 'react'
import "./counterBanner.css"
import { FaPlus } from 'react-icons/fa';

const CounterBanner = () => {
  return (
    <section className='counterBanner'>
        <article className='counterBox'>
            <div className='counterNumber'><FaPlus className='plusIcons'/><h1>150</h1></div>
            <div className='counterText'><p>HAPPY</p><h6>STUDENTS</h6></div>
        </article>
        <article className='counterBox'>
            <div className='counterNumber'><FaPlus className='plusIcons'/><h1>50</h1></div>
            <div className='counterText'><p>CERTIFIED</p><h6>COURSES</h6></div>
        </article>
        <article className='counterBox'>
            <div className='counterNumber'><FaPlus className='plusIcons'/><h1>1000</h1></div>
            <div className='counterText'><p>AWARDS</p><h6>RECEIVED</h6></div>
        </article>
    </section>
  )
}

export default CounterBanner