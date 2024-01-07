import React ,{ useState}from 'react'
import List from './Component/List/List'
import Form from './Component/Form';
import { v4 as uuid } from 'uuid';

const App = () => {
  // const data = ['Home','About','Contact','Menu','Price'];
  const [data, setData] = useState([
    {name: 'Home',
    isDone: true,
    id: '1'}
  ]);
  const handleClick = (text) => {
    // console.log(refInput);
    // console.log(text);
    const inputs = {};
    inputs.name = text;
    // inputs.name = setInput.current.value;
    inputs.isDone = false; 
    // inputs.id = Math.random(Date.now()) * 100000
    inputs.id = uuid;
    setData([...data,inputs]);
    // setInput.current.value="";
    text ="";

  }

  const handleCheck = (id) => {
    setData(data.map(i => {
      if(i.id === id){
        return {name:i.name,isDone:!i.isDone,id:i.id};
      }
      else return i;
    }));
  }

  const handleDelete = (id) => {
    // console.log(id);
    setData(data.filter(i => i.id !== id))
  };
       const handleEdit = (id) => {
        // console.log(id);
        const exitvalue = data.find(i => i.id === id);
        const value = prompt("Enter a value",exitvalue.name);
        if(value !==""){
          setData(data.map(i => i.id ===id ? {name:value, sDone:!i.isDone,id:i.id}:i ))
        }
       }
  return (
    <div>
    <Form formClick ={handleClick}/>



{data.map((i) => <List name={i.name} isDone={i.isDone } key={i.id} 
 onCheck = {handleCheck}
    onDelete = {handleDelete}
    onEdit = {handleEdit}
 id={i.id}/>)}
      {/* <List  name={'Home'}  isDone = {true}/>
      <List name={'About'} isDone = {false}/>
      <List name={'Contact'}  isDone = {false}/>
      <List name={'Menu'} isDone = {true}/> */ }
    </div>
  )
}

export default App