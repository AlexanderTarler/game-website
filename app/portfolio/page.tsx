'use client'
import '../globals.css';
import './portfolio.css';
import Link from 'next/link';
import CSSChanger from '../RealTimeCSS';
import { useGlobalContext } from '../Context/store';
import SceneryChanger from '../Scenery';

export default function Portfolio() {
    const { time, setTime } = useGlobalContext();

    return (
        <>
            <SceneryChanger time={time} setTime={setTime} />

            <main className='portfolio'>

                <h1 className='project_type'>JavaScript</h1>
                <Link className='project_item' href={'https://cv-creator-nine.vercel.app/'}>
                    Cv Creator
                </Link>
                <h1 className='project_type'>Unity / C#</h1>
                <Link className='project_item' href={'https://play.unity.com/mg/other/foximus-rex-web'}>
                    Foximus Rex
                </Link>
            </main>
            <CSSChanger time={time} />
        </>
    )
}