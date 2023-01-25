import './App.css';
import Nav from './components/nav/Nav';
import Main from "./components/first_landing/FirstLanding";
import CounterBanner from "./components/counterBanner/CounterBanner"
import ChallengeBanner from './components/challengeBanner/ChallengeBanner';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <CounterBanner />
      <ChallengeBanner />
     
     
    </div>
  );
}

export default App;
