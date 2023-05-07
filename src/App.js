import logo from './logo.svg';
import './App.css';
import './components/style.css'
import React from 'react';
import Nav from './components/Nav';
import Mymoves from './components/Mymoves';
import Myprofile from './components/Myprofile';
import Logout from './components/Logout';
import Getquote from './components/Getquote';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-2'>
            <Nav/>
        </div>
        <div className='col-10'>
          <BrowserRouter>
              <Routes>
                <Route path="/mymoves" element={<Mymoves/> }/>
                  <Route path="/logout" element={<Logout/>} />
                  <Route path="/getquote" element={<Getquote />} />
                  <Route path="/myprofile" element={<Myprofile />} />
              </Routes>
          </BrowserRouter>
                 
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
