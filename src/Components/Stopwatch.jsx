import React, {useState} from "react"

export default function Stopwatch() {
  return (
    <>
      <h1> 0 </h1>
      <button className="restart"> Restart </button>
      <button className="start"> Start </button>
      <button className="pause"> Pause </button>
      <button className="lap"> Lap </button>
    </>
  )
}
