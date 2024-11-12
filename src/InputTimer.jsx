import React from 'react'

const InputTimer = ({handleinput, handlestart}) => {
    return (
        <>
            <div className="input-container">
                <div className="input-box">
                    <input onChange={handleinput} type="text" id='hours' placeholder='HH' />
                    <input onChange={handleinput} type="text" id='minutes' placeholder='MM' />
                    <input onChange={handleinput} type="text" id='seconds' placeholder='SS' />
                </div>
                <button onClick={handlestart} className='timer-button'>Start</button>
            </div>
        </>
    )
}

export default InputTimer