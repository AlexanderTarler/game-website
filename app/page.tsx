'use client'
import './globals.css';
import './home.css';
import './time-of-day-css/dusk.css';
import './time-of-day-css/night.css';
import './time-of-day-css/dawn.css';
import './time-of-day-css/day.css';
import CSSChanger from './RealTimeCSS';


import Navbar from './Navbar';



export default function Home() {

  return (
    <>
      <Navbar />
      <CSSChanger />
    </>
  )
}