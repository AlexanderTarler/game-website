'use client'
import './globals.css';



export default function SceneryChanger({ setTime }: any) {
    return (
        <>
            <div className='scenery'>
                <button className='scenery_button dawn' onClick={() => setTime(5)}></button>
                <button className='scenery_button day' onClick={() => setTime(9)}></button>
                <button className='scenery_button dusk' onClick={() => setTime(20)}>&#9734;</button>
                <button className='scenery_button night' onClick={() => setTime(0)}></button>
            </div>
        </>
    )
}