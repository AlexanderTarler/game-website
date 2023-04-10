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
      {/* <span><main>
        <h1 id='welcome'>
          <div className='default_text'>Where</div><div id='creativity'>creativity</div> <div className='default_text'>meets</div> <div id='functionality'>functionality</div>
        </h1>
      </main>
      </span> */}
      <CSSChanger />

      {/* <main>
        <h1 id='welcome'>
          <div className=''>Welcome to where</div><div id='creativity'>creativity</div> meets <div id='functionality'>functionality</div>
        </h1>
      </main> */}
    </>
  )
}