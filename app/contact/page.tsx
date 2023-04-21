'use client'
import Link from 'next/link';
import './contact.css';
import { useGlobalContext } from '../Context/store';
import CSSChanger from '../RealTimeCSS';
import SceneryChanger from '../Scenery';



export default function Home() {
    const { time, setTime } = useGlobalContext();
    return (
        <>
            <SceneryChanger setTime={setTime} />
            <div className='contact'>
                <main className='contact_info'>
                    <h1>Contact info</h1>
                    <h3 className='contact_option'>alexander.tarler@gmail.com</h3>
                    <h3 className='contact_option'>
                        <Link href={'https://www.linkedin.com/in/alexander-tarler-5ba900159/'}>
                            LinkedIn
                        </Link>
                    </h3>
                    <h3 className='contact_option'>
                        <Link href={'https://github.com/AlexanderTarler'}>
                            GitHub
                        </Link>
                    </h3>
                </main>
            </div>
            <CSSChanger time={time} />

        </>
    )
}