import React from 'react';
import HomePage from "./HomePage/HomePage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import SignDetect from "./detection/StartDetection";
import './App.css';

function App() {
 

  return (
    <div className='homepage'>
       <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/signdetectpage" element={<MainPage />}/>
           <Route path="/detection" element={<SignDetect/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
