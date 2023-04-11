'use client'
import './home.css';
import './time-of-day-css/night.css';
import './time-of-day-css/dawn.css';
import './time-of-day-css/day.css';
import './time-of-day-css/dusk.css';
import { useEffect, useRef, useState } from "react";




export default function CSSChanger({ time }: any) {
    const date = new Date();
    // const time = date.getHours();
    // const time = 20;

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
            <div className="wrapper">
                <div className="star" id="star1">.</div>
                <div className="star" id="star2">.</div>
                <div className="star" id="star3">.</div>
                <div className="star" id="star4">.</div>
                <div className="star" id="star5">.</div>
                <div className="moon"></div>
                <div className="mountain"></div>
                <div className="tree l1" id="tree1"></div>
                <div className="tree l1" id="tree2"></div>
                <div className="tree l1" id="tree3"></div>
                <div className="tree l1" id="tree4"></div>
                <div className="tree l2" id="tree5"></div>
                <div className="tree l2" id="tree6"></div>
                <div className="tree l2" id="tree7"></div>
                <div className="tree l2" id="tree8"></div>
                <div className="tree l3" id="tree9"></div>
                <div className="tree l3" id="tree10"></div>
                <div className="tree l3" id="tree11"></div>
                <div className="tree l3" id="tree12"></div>
                <span><main>
                    <h1 id='night_welcome'>
                        <div className='default_text'>Where</div><div id='night_creativity'>creativity</div> <div className='default_text'>meets</div> <div id='night_functionality'>functionality</div>
                    </h1>
                </main>
                </span>
            </div></>)

    }
}

