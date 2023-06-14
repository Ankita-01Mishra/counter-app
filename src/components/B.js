import React, { useState } from 'react'

const B = (props) => {
  let stylingRed = {
    backgroundColor : "#D45E5E",
    color:"black",
    hieght: "40px",
    width : "120px",
    borderRadius : "5px"
  }

  let stylingBlue = {
    backgroundColor : "#5EC8D4",
    color:"black",
    hieght: "60px",
    width : "120px",
    borderRadius : "5px"
  }

  const [counter , SetCounter ] = useState(props.value)
  const [color , setColor ] = useState (true)  
  const increaseCounter = ()=>{
    SetCounter(counter + 10)

  }

  const changeColor = () => {
    setColor(!color)

  }

  return (
    <div>
        <h3>B : {counter}</h3>
        <br />
        <button onClick={increaseCounter}>Add 10 </button>
        <br />
        <br />

        {color  ? <button onClick={changeColor} style={stylingRed}>Change Color of button </button> : <button onClick={changeColor} style={stylingBlue}>Change Color of button </button>}
    </div>
  )
}

export default B