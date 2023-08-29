import style from "../style/StopwatchApp.module.css";
import { Button } from '@chakra-ui/react'
import React, {useState, useEffect} from "react";

export const StopwatchApp = () => {

const [ running, setRunning ] = useState(false);
const [ time, setTime ] = useState(0);

useEffect (() => {
  let interval;

  if (running) {
    interval = setInterval (() => {
      setTime(prevTime => prevTime + 1)
    }, 1000);
  } else {
    clearInterval(interval);
  }

  return () => {
    clearInterval(interval)
  };
}, [running])

const start = () => {
  setRunning(!running); // Function ini masih berfungsi sebagai start dan stop
};

const stop = () => {
  setRunning(false);
};

const reset = () => {
  setRunning(false);
  setTime(0);
}

  return (
    <div className = {style.stopwatchContainer}>
      <div style = {{marginBottom: "10px", fontWeight: "bold"}}> Stopwatch App </div>
      <p style={{fontSize: "50px", fontWeight: "bold", marginBottom: "15px"}}> {time} </p>
      <div className = {style.stopwatchButton}>
      <Button colorScheme='green' onClick = {start}> Start </Button>
      <Button colorScheme='red' onClick = {stop}> End </Button>
      <Button colorScheme='yellow' onClick = {reset}> Reset </Button>
      </div>
    </div>
  )
}