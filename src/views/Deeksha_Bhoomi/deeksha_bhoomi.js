import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import DBimg from './deeksha_bhoomi.jpg'

function Deeksha_Bhoomi() {
  return (
   
    <div>
    <Navbar/>
     <h1 className='page-title'>Deeksha-Bhoomi</h1>
     <img src={DBimg} className='header-image'/>
    </div>
  );
}

export default Deeksha_Bhoomi;
