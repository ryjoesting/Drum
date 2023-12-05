import { useState, useEffect } from 'react'
import DrumPadGrid from './DrumPadGrid';

function Card() {
    function handleKeyPress(event)
    {
        console.log(`Key: ${event.key} with keycode ${event.code} has been pressed`);
        switch (event.key) {
            case 'q':
                console.log('wooooo')
                break;
            case 'w':
                break;
            case 'e':
                break;
            case 'a':
                break;
            case 's':
                break;
            case 's':
                break;
            case 'd':
                break;
            case 'z':
                break;
            case 'x':
                break;
            case 'c':
                break;
            default:
                break;
        }
    };
    useEffect( () => {
        document.addEventListener('keydown', handleKeyPress);
    }, []);
    return (
        <div className="card shadow border card-container">
            <div className='row'>
                <div className='col-6'><DrumPadGrid /></div>
                <div className='col-6'><DrumPadGrid /></div>
            </div>
            
        </div>
    )
}

export default Card;