import React from 'react'
import Main from "./components/first_landing/FirstLanding";
import CounterBanner from "./components/counterBanner/CounterBanner"
import ChallengeBanner from './components/challengeBanner/ChallengeBanner';
import FIndYourCourse from './components/findCourse/FIndYourCourse';
import AboutUs from './components/about us/AboutUs';
import WhyUs from './components/whyUs/WhyUs';
import VideoPlayer from './components/videoplayer/VideoPlayer';
import UsersThought from './components/userThought/UsersThought';
import Formulario from './components/form/Formulario';
import Footer from './components/footer/Footer';

const RenderPage = () => {
  return (
    <>
    
      <Main />
      <CounterBanner />
      <ChallengeBanner />
      <FIndYourCourse />
      <AboutUs />
      <WhyUs />
      <VideoPlayer />
      <UsersThought />
      <Formulario />
      <Footer />
    </>
  )
}

export default RenderPage