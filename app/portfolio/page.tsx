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
                <h1>Projects</h1>
                <Link className='project_item' href={'https://cv-creator-nine.vercel.app/'}>
                    Cv Creator
                </Link>
            </main>
            <CSSChanger time={time} />
        </>
    )
}