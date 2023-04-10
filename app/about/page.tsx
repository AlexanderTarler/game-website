import './about.css';

import Navbar from '../Navbar';


export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className='about'>
                    <h2>I am a newly graduated fullstack developer living in Sweden.
                        I have a cat named Lucy, I love to play ttrpg's and am a hell of a baker.
                        I also spend a few hours every week in the gym because of the baking.
                    </h2>
                </div>
            </main>
        </>
    )
}