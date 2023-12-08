import React from "react";
import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState("Is great to see you!");

  const clickHandler = () => {
    setChangeText("The text was changed");
  };

  return (
    <div>
      <h2>Hello World!</h2>
      <p>{changeText} </p>
      <button onClick={clickHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
