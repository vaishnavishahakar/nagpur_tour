import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import ContactImg from './../Shri Swaminarayan Mandir/Shri Swaminarayan Mandir.webp'

function Contact() {
  return (
    <div>
    <Navbar/>
    <h1 className='page-title'>Shri Swaminarayan Mandir</h1>
    <img src={ContactImg} className='header-image'/>
    </div>
  );
}

export default Contact;
