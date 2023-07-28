import logo from './logo.svg';
import './App.css';
import Nav from './views/nav.js';
import React, { useState } from 'react';
function App() {
  const link = 'https://www.w3schools.com/howto/howto_js_topnav.asp';
  
  let [name, setName] = useState('HT')
  let [address, setAddress] = useState('')

  const clickMe = (event) => {
    if(!address){
      alert('emtpy input')
      return;
    }
    
    const newTodo = {id:'aa', title: address}
    setTodos([...todos, newTodo])
    setAddress('')
  }
  
  const handleOnChange = (event) => {
    setAddress(event.target.value)
  }

  let [todos, setTodos] = useState([
    {id: 'todo1', title: 'siuuuu'},
    {id: 'todo2', title: 'gooooo'},
  ])
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img style={{marginTop : '-100px'}} src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <a href={link}> Đi thôi</a> 
        <div className='todos-container'>
          {todos.map(todo => {
            return(
              <li className='todos-child' key={todo.id}> {todo.title}</li>
            )
          })}
         
        </div>
        <input type='text' value={address} onChange = {(event) =>handleOnChange(event)}/> 
        <button onClick = {(event) =>clickMe(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
