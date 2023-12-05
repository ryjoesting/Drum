import {useState} from 'react'

function DrumPadGrid() {
    return (
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
    )
}

export default DrumPadGrid;