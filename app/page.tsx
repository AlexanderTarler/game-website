'use client'
import './globals.css';
import './time-of-day-css/dusk.css';
import './time-of-day-css/night.css';
import './time-of-day-css/dawn.css';
import './time-of-day-css/day.css';
import CSSChanger from './RealTimeCSS';
import SceneryChanger from './Scenery';
import { useGlobalContext } from './Context/store';


export default function Home() {
  const { time, setTime } = useGlobalContext();


  return (
    <>
      <SceneryChanger setTime={setTime} />
      <span><main>
        <h1 id='welcome'>
          <div className='default_text'>Where</div><div id='day_creativity'>creativity</div> <div className='default_text'>meets</div> <div id='day_functionality'>functionality</div>
        </h1>
      </main>
      </span>
      <CSSChanger time={time} />
    </>
  )
}