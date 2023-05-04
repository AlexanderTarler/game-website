'use client'
import './globals.css';



export default function SceneryChanger({ time, setTime }: any) {

    return (
        <>
            <div className='scenery'>
                <button className={time >= 5 && time < 9 ? 'scenery_button underlined' : 'scenery_button'} id='dawn' onClick={() => setTime(5)}></button>
                <button className={time >= 9 && time < 19 ? 'scenery_button underlined' : 'scenery_button'} id='day' onClick={() => setTime(9)}></button>
                <button className={time >= 19 && time <= 23 ? 'scenery_button underlined' : 'scenery_button'} id='dusk_button' onClick={() => setTime(20)}>&#9734;</button>
                <button className={time >= 23 || time < 5 ? 'scenery_button underlined' : 'scenery_button'} id='night' onClick={() => setTime(0)}></button>
            </div>
        </>
    )
}