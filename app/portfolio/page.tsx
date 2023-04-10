import '../globals.css';
import Link from 'next/link';

import Navbar from '../Navbar';


export default function Home() {
    return (
        <>
            <Navbar />
            <main className='portfolio'>
                <div >
                    <h2 className='project'>
                        <Link href={'https://cv-creator-three.vercel.app/'}>
                            Cv Creator
                        </Link>
                    </h2>
                </div>
            </main>
        </>
    )
}