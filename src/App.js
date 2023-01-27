import './App.css';
import Nav from './components/nav/Nav';
import Main from "./components/first_landing/FirstLanding";
import CounterBanner from "./components/counterBanner/CounterBanner"
import ChallengeBanner from './components/challengeBanner/ChallengeBanner';
import FIndYourCourse from './components/findCourse/FIndYourCourse';
import AboutUs from './components/about us/AboutUs';
import WhyUs from './components/whyUs/WhyUs';
import VideoPlayer from './components/videoplayer/VideoPlayer';
import UsersThought from './components/userThought/UsersThought';


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <CounterBanner />
      <ChallengeBanner />
      <FIndYourCourse />
      <AboutUs />
      <WhyUs />
      <VideoPlayer />
      <UsersThought />
    </div>
  );
}

export default App;
