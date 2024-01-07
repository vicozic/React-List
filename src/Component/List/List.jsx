import React from "react";

import "./List.css";
import {BsTrash} from "react-icons/bs"

const List = ({ name, isDone , onCheck, id, onDelete,onEdit}) => { 
  // console.log(isDone);
 const handleCheck =() => {
  onCheck(id);
 }
const handleDelete =() => {
onDelete(id);

};const handleEdit =() => {
  onEdit(id);
};

  
  return (

    
    
 

    

    <div className={`listStyle ${isDone && "test"}`}>
    <div className="input">
    <input type="checkbox" name="" checked={isDone} onChange={handleCheck}/>
      <p> {name}</p>
    </div>
      <div className="btnContainer">
        <button onClick={handleEdit}>
        
        </button>
        <button onClick={handleDelete}>
          <BsTrash/>
        </button>
      </div>
      </div>
    

  
  
  );
};

export default List;
