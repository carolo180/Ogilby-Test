import React from 'react';
import "./FindYourCourse.css"
import arrow from "../../assets/images/Arrow.png"

const FIndYourCourse = () => {
  return (
 <section className='findYourCourse'>
    <article className='headCourse'>
        <div className='headTitle'><h1>FIND</h1><p>Your Course.</p></div>
        <div className='editCourse'>
          <div className='squareDiv'> <div className='squareCourse'></div><p>EDITION </p></div>
            <span className='twentytwo'>2022</span>
        </div>
    </article>
    <article className='courses'>
        <div className='eachCourse'>
            <h4>.01</h4>
            <div className='bodyCourses'>
                <h1>COURSE<span>01</span></h1>
                 <hr></hr> 
                <p>Lorem ipsum dolor sit amet, consecte-
                    tur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et.
                </p>
                <button className='courseBtn'>READ MORE</button>
            </div>
           
        </div>
        <div className='eachCourse'>
            <h4>.02</h4>
            <div className='bodyCourses'>
                <h1>COURSE<span>02</span></h1>
                 <hr></hr> 
                <p>Lorem ipsum dolor sit amet, consecte-
                    tur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et.
                </p>
                <button className='courseBtn'>READ MORE</button>
            </div>
        </div>
        <div className='eachCourse'>
            <h4>.03</h4>
            <div className='bodyCourses'>
                <h1>COURSE<span>03</span></h1>
                 <hr></hr> 
                <p>Lorem ipsum dolor sit amet, consecte-
                    tur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et.
                </p>
                <button className='courseBtn'>READ MORE</button>
            </div>
        </div> 
        <div className='eachCourse'>
            <h4>.04</h4>
            <div className='bodyCourses'>
                <h1>COURSE<span>04</span></h1>
                 <hr></hr> 
                <p>Lorem ipsum dolor sit amet, consecte-
                    tur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et.
                </p>
                <button className='courseBtn'>READ MORE</button>
            </div>
        </div>  
    </article>
    <article className='footerCourses'>
        <p>MORE COURSES</p>
        <img src={arrow} />
    </article>
 </section>
  )
}

export default FIndYourCourse