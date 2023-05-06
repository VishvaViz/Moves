import logo from './logo.svg';
import './App.css';
import './components/style.css'
import React from 'react';
import Nav from './components/Nav';
import Mymoves from './components/Mymoves';

function App() {
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-2'>
            <Nav/>
        </div>
        <div className='col-10'>
          <Mymoves/> 
                 
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
