import React ,{ useState}from 'react'
import List from './Component/List/List'
import Form from './Component/Form';

const App = () => {
  // const data = ['Home','About','Contact','Menu','Price'];
  const [data, setData] = useState([
    {name: 'Home',
    isDone: true,
    id: '1'}
  ]);
  const handleClick = (text) => {
    // console.log(refInput);
    console.log(text);
    const inputs = {};
    inputs.name = text;
    // inputs.name = setInput.current.value;
    inputs.isDone = false; 
    inputs.id = Math.random(Date.now()) * 100000
    setData([...data,inputs]);
    // setInput.current.value="";
    text ="";

  }

  const handleCheck = () => {
    console.log("This is handle Check");
  }
         
  return (
    <div>
    <Form formClick ={handleClick}/>



{data.map((i) => <List name={i.name} isDone={i.isDone } key={i.id}  onCheck = {handleCheck}/>)}
      {/* <List  name={'Home'}  isDone = {true}/>
      <List name={'About'} isDone = {false}/>
      <List name={'Contact'}  isDone = {false}/>
      <List name={'Menu'} isDone = {true}/> */ }
    </div>
  )
}

export default App