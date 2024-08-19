import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import SSMimg from './../Shri Swaminarayan Mandir/Shri Swaminarayan Mandir.webp'

function Shri_Swaminarayan_Mandir() {
  return (
    <div>
    <Navbar/>
    <h1 className='page-title'>Shri Swaminarayan Mandir</h1>
    <img src={SSMimg} className='header-image'/>
    </div>
  );
}

export default Shri_Swaminarayan_Mandir;
