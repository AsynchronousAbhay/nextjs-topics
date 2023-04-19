import React, { useState } from 'react'

const Timer = () => {

  const [time, settime] = useState(new Date().toLocaleTimeString())

  const timeChangeHandler = () => {
    settime(new Date().toLocaleTimeString())
  }

  setInterval(() => {
    timeChangeHandler();
  }, 1000);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={timeChangeHandler}>Change Time</button>
    </div>
  )
}

export default Timer;