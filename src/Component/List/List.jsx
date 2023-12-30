import React from "react";

import "./List.css";


const List = ({ name, isDone , onCheck}) => { 
  // console.log(isDone);
 const handleCheck =() => {
  onCheck();
 }

  
  return (

    
    <div>
 

    
      <div className={`listStyle ${isDone && "test"}`}>
      <input type="checkbox" name="" checked={isDone} onChange={handleCheck}/>
        {name}
      </div>
    </div>
  );
};

export default List;
