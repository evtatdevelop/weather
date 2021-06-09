import React from 'react';

import './error.css';
import img from './errorImg.jpg';
const Error = () => {
  return (
    <>
      <img src={img} alt='Error'></img>
      <span>Something goes wrong</span>
    </>
    )
}

export default Error;