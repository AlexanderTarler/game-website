'use client'
import './globals.css';
import './home.css';
import './time-of-day-css/dusk.css';
import './time-of-day-css/night.css';
import './time-of-day-css/dawn.css';
import './time-of-day-css/day.css';
import CSSChanger from './RealTimeCSS';


import Navbar from './Navbar';
import { useState } from 'react';



export default function Home() {
  const [time, setTime] = useState(0);

  return (
    <>
      <Navbar />
      <button className='button-dawn' onClick={() => setTime(5)}>Dawn</button>
      <button className='button-dawn' onClick={() => setTime(9)}>Day</button>
      <button className='button-dawn' onClick={() => setTime(20)}>Dusk</button>
      <button className='button-dawn' onClick={() => setTime(0)}>Night</button>
      <CSSChanger time={time} />
    </>
  )
}