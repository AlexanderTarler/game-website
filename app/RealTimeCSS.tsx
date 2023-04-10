'use client'
import './home.css';
import './time-of-day-css/night.css';
import './time-of-day-css/dawn.css';
import './time-of-day-css/day.css';
import './time-of-day-css/dusk.css';
import { useEffect, useRef, useState } from "react";




export default function CSSChanger() {
    const [timeOfDay, setTimeOfDay] = useState('');
    const date = new Date();
    const time = 6;

    if (time >= 5 && time < 9) {
        return (<>
            <div className="container">
                <div className="sky"></div>
                <div className="sea">
                    <div className="light"></div></div>

                <div className="sun"></div>
                <div className="bird1"></div>
                <div className="birdr1"></div>
                <div className="bird"></div>
                <div className="birdr"></div>
                <div className="fin">
                    <div className="wave"></div></div>
            </div>
            <span><main>
                <h1 id='dawn_welcome'>
                    <div className='default_text'>Where</div><div id='dawn_creativity'>creativity</div> <div className='default_text'>meets</div> <div id='dawn_functionality'>functionality</div>
                </h1>
            </main>
            </span></>)
    } else if (time >= 9 && time < 19) {
        return (<>
            <div id="background-wrap">
                <div className="x1">
                    <div className="cloud"></div>
                </div>

                <div className="x2">
                    <div className="cloud"></div>
                </div>

                <div className="x3">
                    <div className="cloud"></div>
                </div>

                <div className="x4">
                    <div className="cloud"></div>
                </div>

                <div className="x5">
                    <div className="cloud"></div>
                </div>
            </div>
            <span><main>
                <h1 id='day_welcome'>
                    <div className='default_text'>Where</div><div id='day_creativity'>creativity</div> <div className='default_text'>meets</div> <div id='day_functionality'>functionality</div>
                </h1>
            </main>
            </span>
        </>)
    } else if (time >= 19 && time <= 23) {
        return (<>
            <div className='dusk-background' id='bg-animation'>
                <div id="dusk"></div>
                <div id="dusk2"></div>
                <div id="dusk3"></div>
                <div id="dusk4"></div>
            </div><span><main>
                <h1 id='dusk_welcome'>
                    <div className='default_text'>Where</div><div id='dusk_creativity'>creativity</div> <div className='default_text'>meets</div> <div id='dusk_functionality'>functionality</div>
                </h1>
            </main>
            </span></>)
    } else {
        return (<>
            <div className='night-background' id='bg-animation'>
                <div id="night"></div>
                <div id="night2"></div>
                <div id="night3"></div>
                <div id="night4"></div>
            </div><span><main>
                <h1 id='night_welcome'>
                    <div className='default_text'>Where</div><div id='night_creativity'>creativity</div> <div className='default_text'>meets</div> <div id='night_functionality'>functionality</div>
                </h1>
            </main>
            </span></>)
    }
}

