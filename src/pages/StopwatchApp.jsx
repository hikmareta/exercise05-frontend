import style from "../style/StopwatchApp.module.css";
import { Button } from '@chakra-ui/react'

export const StopwatchApp = () => {
  return (
    <div className = {style.stopwatchContainer}>
      <div style = {{marginBottom: "20px"}}> 00 . 00 </div>
      <div className = {style.stopwatchButton}>
      <Button colorScheme='green'> Start </Button>
      <Button colorScheme='red'> End </Button>
      <Button colorScheme='yellow'> Reset </Button>
      </div>
    </div>
  )
}