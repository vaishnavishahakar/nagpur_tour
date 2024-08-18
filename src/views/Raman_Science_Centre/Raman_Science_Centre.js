import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import AboutImg from './../Raman_Science_Centre/Raman_Science_Centre_Nagpur.webp'

function About() {
  return (
    <div>
     <Navbar/>
     <h1 className='page-title'>Raman Science Centre</h1>
     <img src={AboutImg} className='header-image'/>
    </div>
  );
}

export default About;
