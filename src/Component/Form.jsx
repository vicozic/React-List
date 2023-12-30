import React, { useRef } from 'react'
import "./Form.css";

const Form = ({formClick}) => {
  const setInput = useRef();
  const handleClick = () => {
    formClick(setInput.current.value);
    setInput.current.value ="";
  }
    
  return (
    <div>
    <input type="text" ref={setInput} />
    <button onClick={handleClick}>Click Me</button>

  </div>
  )
}

export default Form