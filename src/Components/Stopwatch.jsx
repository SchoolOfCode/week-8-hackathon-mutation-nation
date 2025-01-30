import React, { useEffect, useRef, useState } from "react"


//MVP 1 - Restart button
export default function Stopwatch() {
  const [time, setTime] = useState(0)
  function handleRestart() {
    setTime(0)
  }
  useEffect(() => {
    timeInc()

    return () => clearInterval(timeHandler.current)

    })

    let timeHandler=useRef()

    function timeInc(){
      timeHandler.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
          } , 1000)
        }

    return (
      <>
        <h1> {time} </h1>
        <button className="restart" onClick={()=>setTime(0)}> Restart </button>
        <button className="start"> Start </button>
        <button className="pause"> Pause </button>
        <button className="lap"> Lap </button>
      </>
    )
  }
