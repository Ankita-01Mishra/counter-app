import React, { useState } from "react";
import "../styles/Counter.css";
import A from "./A";

function Counter() {
  const [style , setStyle] = useState({})
  const [count, setCount] = useState(0);


  const changeColor = () => {
    setStyle({
        backgroundColor: "orange",
        width: "60%",
        height: " 60%",
        borderRadius: "50%",
    })
  }

  const increment = () => {
   
   
    setCount(count + 1);
  };



  return (
    <div>
      <center>
        <div className="ConatinerDiv">
          <h2 className="counterImage" style={style}> {count}</h2>
          <button  onClick={increment} className="buttonMy">
            Click Here to increase counter
          </button>

          
        </div>
        <br />
        <button onClick = {changeColor} className="changecolor">Change Counter Color</button>
      </center>
      <br />
      <A></A>
    </div>
  );
}

export default Counter;
