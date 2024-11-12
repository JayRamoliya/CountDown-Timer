import React from 'react'

const ShowTimer = (props) => {
    const {hours,minutes, seconds, isPause, handlepause,handleresume, handlereset} = props;
    return (
        <>
            <div className='show-container'>
                <div className='timer-box'>
                    <div>{hours < 10 ? `0${hours}` : hours}</div>
                    <span>:</span>
                    <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                    <span>:</span>
                    <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
                </div>
                <div className='action-box'>
                    {
                        !isPause && (
                            <button onClick={handlepause} className='timer-button'>Pause</button>
                        )
                    }
                    {
                        isPause && (
                            <button onClick={handleresume} className='timer-button'>Resume</button>
                        )
                    }
                    <button onClick={handlereset} className='timer-button'>Reset</button>
                </div>
            </div>
        </>
    )
}

export default ShowTimer