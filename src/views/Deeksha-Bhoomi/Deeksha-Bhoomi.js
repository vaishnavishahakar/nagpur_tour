import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HomeImg from './../Deeksha-Bhoomi/deeksha-bhoomi.jpg'

function Home() {
  return (
   
    <div>
    <Navbar/>
     <h1 className='page-title'>Deeksha-Bhoomi</h1>
     <img src={HomeImg} className='header-image'/>
    </div>
  );
}

export default Home;
