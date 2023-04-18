'use client'
import './portfolio.css';
import Link from 'next/link';
import CSSChanger from '../RealTimeCSS';
import Navbar from '../Navbar';
import { useState } from 'react';
import SceneryChanger from '../Scenery';

const date = new Date();
const present = date.getHours();

export default function Portfolio() {
    const [time, setTime] = useState(present);

    return (
        <>
            <Navbar />
            <SceneryChanger setTime={setTime} />

            <main className='portfolio'>
                <h1>Projects</h1>
                <Link className='project_item' href={'https://cv-creator-three.vercel.app/'}>
                    Cv Creator
                </Link>
            </main>
            <CSSChanger time={time} />
        </>
    )
}