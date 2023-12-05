import { useState, useEffect } from 'react'

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
        <div class="card shadow border">
            <div class="card-body d-flex flex-column align-items-center">
                <p class="card-text">Click the buttons to use the drum machine!</p>
                <div className='row container-fluid m-3' id='card-container'>
                    <div className='row justify-content-center'>
                        <div className="col-8 m-3" id='btn-matrix'>
                            <div class="row btn-row">
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'q', code: 'KeyQ'})}>Q</button>
                                </div>
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'w', code: 'KeyW'})}>W</button>
                                </div>
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'e', code: 'KeyE'})}>E</button>
                                </div>
                            </div>
                            <div class="row btn-row">
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'a', code: 'KeyA'})}>A</button>
                                </div>
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 's', code: 'KeyS'})}>S</button>
                                </div>
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'd', code: 'KeyD'})}>D</button>
                                </div>
                            </div>
                            <div class="row btn-row">
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'z', code: 'KeyZ'})}>Z</button>
                                </div>
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'x', code: 'KeyX'})}>X</button>
                                </div>
                                <div class="col-4">
                                    <button type="button" class="btn btn-dark btn-block" onClick={() => handleKeyPress({key: 'c', code: 'KeyC'})}>C</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 m-3' id='btn-controls'>
                            <p>Button</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;