'use client'
import './globals.css';
import './time-of-day-css/dusk.css';
import './time-of-day-css/night.css';
import './time-of-day-css/dawn.css';
import './time-of-day-css/day.css';
import CSSChanger from './RealTimeCSS';
import SceneryChanger from './Scenery';
import Welcome from './Welcome';
import { useGlobalContext } from './Context/store';


export default function Home() {
  const { time, setTime } = useGlobalContext();
  return (
    <>
      <SceneryChanger time={time} setTime={setTime} />
      <Welcome />
      <CSSChanger time={time} />
    </>
  )
}