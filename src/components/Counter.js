import React, { useState } from "react";
import "../styles/Counter.css";
import A from "./A";

function Counter() {
  const [style , setStyle] = useState({})
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('red');


  const changeColor  = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    const currentIndex = colors.indexOf(backgroundColor);
    const newIndex = (currentIndex + 1) % colors.length;
    setBackgroundColor(colors[newIndex]);
  };


  const increment = () => {
   
   
    setCount(count + 1);
  };



  return (
    <div>
      <center>
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: backgroundColor,
          marginBottom: '10px',
        }}>
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
