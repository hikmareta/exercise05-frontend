import style from "../style/CounterApp.module.css";
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={style.counterContainer}>
      <div className = {style.displayer}>
        <p className = {style.title}> Counter :</p>
        <div className={style.numberContainer}> {counter} </div>
      </div>
      <div className = {style.buttonGroup}>
        <Button
          style={{width: "90px"}}
          colorScheme="green"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          {" "}
          Add{" "}
        </Button>
        <Button
          style={{width: "90px"}}
          colorScheme="red"
          onClick={() => setCounter((counter) => counter - 1)}
        >
          {" "}
          Delete{" "}
        </Button>
      </div>
    </div>
  );
};
