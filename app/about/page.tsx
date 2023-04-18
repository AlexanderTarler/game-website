'use client'
import './about.css';
import CSSChanger from '../RealTimeCSS'
import Navbar from '../Navbar';
import { useState } from 'react';
import SceneryChanger from '../Scenery';



export default function Home() {
    const [time, setTime] = useState(0);

    return (
        <>
            <Navbar />
            <SceneryChanger setTime={setTime} />
            <main className='about'>
                <div className='fakeMenu'>
                    <div className="fakeButtons fakeClose"></div>
                    <div className="fakeButtons fakeMinimize"></div>
                    <div className="fakeButtons fakeZoom"></div>
                </div>
                <div className="fakeScreen">
                    <p className="line1">Hi there!<span className="cursor1">_</span></p>
                    <p className="line2">I'm Alex, a fullstack developer in Stockholm with a great passion for coding. <span className="cursor2">_</span></p>
                    <p className="line3">Let's work together!<span className="cursor3">_</span></p>
                    <p className="line4"><span className="cursor4">_</span></p>
                </div>
            </main>
            <CSSChanger time={time} />
        </>
    )
}