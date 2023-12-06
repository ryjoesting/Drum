import {useState} from 'react'
 // uses ES6 destructuring to take audioClip object as props
function Drum( { audioClipObj } ) {
    //plays the sound if button is directly clicked
    const playSound = (clip) => {
        document.getElementById(clip.keyTrigger).play().catch(console.error); //finds the HTML audio clip with ID of whatever key was pressed
        document.getElementById('drum-' + clip.keyTrigger).focus() //sets focus on the drum pad
        document.getElementById('display').innerText = clip.description;
    }

    return (
    <button className='drum-pad' id={'drum-' + audioClipObj.keyTrigger} text={audioClipObj.keyTrigger} onClick={() => playSound(audioClipObj)}>
        <audio id={audioClipObj.keyTrigger} src={audioClipObj.url}/>
        {audioClipObj.keyTrigger}
    </button>
    )
}

export default Drum;

/*
<div className='container drum-pad-grid-container'>
        <div className='row btn-row'>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
        </div>
        <div className='row btn-row'>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
        </div>
        <div className='row btn-row'>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
            <div className='col-4'>
                <button className='btn btn-primary btn-block'>#</button>
            </div>
        </div>
    </div>
*/