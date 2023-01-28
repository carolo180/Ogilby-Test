import React from 'react'
import ScrollToTop from "./components/scroll/ScrollToTop"
import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/nav/Nav';
import RenderPage from './RenderPage';

function App() {
  return (
    
    <div className="App">
       <ScrollToTop>
          <Nav />
          <Routes>
                <Route path="/" element={<RenderPage />} />
          </Routes>
       </ScrollToTop>
    
    </div>
  );
}

export default App;
