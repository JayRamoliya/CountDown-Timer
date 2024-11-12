import React, { useEffect, useState } from 'react'
import './App.css'
import InputTimer from './InputTimer'
import ShowTimer from './ShowTimer'

const App = () => {
  const [isStart, setIsStart] = useState(false)
  const [isPause, setIsPause] = useState(false)

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const [timerId, setTimerId] = useState(0)

  const handleinput = (e) => {
    const value = parseInt(e.target.value)
    const id = e.target.id
    if (id === 'hours') {
      setHours(value)
    }
    else if (id === 'minutes') {
      setMinutes(value)
    }
    else {
      setSeconds(value)
    }
  }

  const runtimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds(sec - 1)
    }
    else if (sec === 0 && min > 0) {
      setMinutes(min - 1)
      setSeconds(59)
    }
    else {
      setHours(hr - 1)
      setMinutes(59)
      setSeconds(59)
    }
    if (hr === 0 && min === 0 && sec === 0) {
      handlereset()
      alert("Timer is finished")
      clearInterval(tid)
      return
    }
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runtimer(seconds, minutes, hours, tid)
      }, 1000)
      setTimerId(tid)
    }
    return () => {
      clearInterval(tid)
    }
  }, [isStart, hours, minutes, seconds])

  const handlepause = () => {
    setIsPause(true)
    clearInterval(timerId)
  }

  const handlereset = () => {
    setIsStart(false)
    resettimer()
  }

  const handleresume = () => {
    setIsPause(false)
    runtimer(seconds, minutes, hours)
  }

  const resettimer = () => {
    setMinutes(0)
    setSeconds(0)
    setHours(0)
    clearInterval(timerId)
  }

  const handlestart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid Input")
      return
    }
    else {
      setIsStart(true)
    }
  }


  return (
    <div className='App'>
      <div>
        <h1>Countdown Timer</h1>
        {
          !isStart && <InputTimer handlestart={handlestart} handleinput={handleinput} />
        }
      </div>

      {
        isStart && <ShowTimer hours={hours} minutes={minutes} seconds={seconds} isPause={isPause} handlepause={handlepause} handleresume={handleresume} handlereset={handlereset} />
      }

    </div>
  )
}

export default App