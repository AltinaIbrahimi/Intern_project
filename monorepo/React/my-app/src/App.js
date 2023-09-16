import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {IoIosArrowForward} from "react-icons/io"
import consultation from "./assets/consultation.png"
import dermalFillers from "./assets/dermalFillers.png"
import antiWrinkle from "./assets/antiWrinkle.png"
import scleroTherapy from "./assets/scleroTherapy.png"
import pabau from "./assets/pabau.png"
import './App.css';

const App = () => {
  const [step, setStep] = useState('1/2');

  const handleOptionSelect = () => {
    setStep('2/2');
  };

  const handleBack = () => {
    setStep('1/2');
  };

  //Header
  const Header = ({ step }) => {
    return <div className="header">Step: {step}</div>;
  };

  //SelectionPage
  const SelectionPage = () => {
    
    return (
      <div className="page">
        <h2>Select an option:</h2>
        <ul className='ul-list'>
          <li>
  
            <Link className='options' onClick={handleOptionSelect} to="/option1">
              <div className='block'>
                <div className='image' style={{content:`url(${scleroTherapy})`}}></div>
                <div>Sclero Therapy</div>
              </div>
              <div className='icon'><IoIosArrowForward/></div>
            </Link>

            </li>
          <li>
            <Link className='options' onClick={handleOptionSelect} to="/option2">
              <div className='block'>
                <div className='image' style={{content:`url(${consultation})`}}></div>
                <div>Consultation</div> 
              </div>         
            <div><IoIosArrowForward/></div>
            </Link>

          </li>
          <li>
            <Link className='options' onClick={handleOptionSelect} to="/option3">
              <div className='block'>
                <div className='image' style={{content:`url(${dermalFillers})`}}></div>
                <div>Dermal Fillers</div> 
              </div>
              <div><IoIosArrowForward/></div>
            </Link>

          </li>
          <li>
            <Link className='options' onClick={handleOptionSelect} to="/option4"> 
              <div className='block'>
                <div className='image' style={{content:`url(${antiWrinkle})`}}></div>
                <div>Anti Wrinkle Treatment</div> 
              </div>
              <div><IoIosArrowForward/></div>
              </Link>

          </li>
        </ul>
      </div>
    );
  };

  //OptionPage
  const OptionPage = ({ option }) => {
    return (
      <div className="page">
        <h2>Selected Option:</h2>
        <p>{option}</p>
      </div>
    );
  };


  return (
    <Router>
      <div className="app">
        <Header step={step} />

        <Routes>
          <Route path="/" exact element={<SelectionPage />}>
          </Route>
          <Route path="/option1" element={<OptionPage option="Sclero Therapy" />}>
          </Route>
          <Route path="/option2" element={<OptionPage option="Consultation" />}>
          </Route>
          <Route path="/option3" element={<OptionPage option="Dermal Fillers" />}>
          </Route>
          <Route path="/option4" element={<OptionPage option="Anti Wrinkle" />}>
          </Route>
        </Routes>

        {step === "2/2" && (
          <Link className="backButton" to="/" onClick={handleBack}>
           Go Back
          </Link>
        )}
      </div>
      <div className="consultationSection">
      <p>Not sure about consultation type? Please, call
        <Link to="/contact">020237959063</Link> 
      </p>
  </div>
      <footer className="footer">
        <div>&copy; Powered By</div>
        <div style={{content:`url(${pabau})`, width: "20px", height: "20px"}}/>
        <div>Pabau.</div>
      </footer>
          
          
    </Router>
  );
};

export default App;
