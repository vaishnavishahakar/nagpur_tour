import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import RSCimg from './../Raman_Science_Centre/Raman_Science_Centre_Nagpur.webp'

function RSC() {
  return (
    <div>
     <Navbar/>
     <h1 className='page-title'>Raman Science Centre</h1>
     <img src={RSCimg} className='header-image'/>
    </div>
  );
}

export default RSC;
