import logo from './logo.svg';
import './App.css';
import Nav from './views/nav.js';
import Covid from './views/covid.js';
import Todo from './views/todo';
import React, { useState, useEffect } from 'react';
function App() {
  const link = 'https://www.w3schools.com/howto/howto_js_topnav.asp';

  useEffect(() => {
    console.log('Loading')
  })

  let [name, setName] = useState('HT')
  let [address, setAddress] = useState('')

  const clickMe = (event) => {
    if (!address) {
      alert('emtpy input')
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: 'HT'
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnChange = (event) => {
    setAddress(event.target.value)
  }
  const deletetodos = (id) => {
    let curTodos = todos
    curTodos = curTodos.filter(item => item.id !== id)
    setTodos(curTodos)
  }

  let [todos, setTodos] = useState([
    { id: 'todo1', title: 'siuuuu', type: 'HT' },
    { id: 'todo2', title: 'gooooo', type: 'jus' },
  ])
  return (
    <div className="App">
      <Nav />

      <header className="App-header">

        <img style={{ marginTop: '0px' }} src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <a href={link}> Đi thôi</a>

        < Covid />

        {/* <Todo
           todos = {todos}
           title = {'Todos Alls'}
           deletetodos = {deletetodos}
        />
         <Todo
           todos = {todos.filter(todo => todo.type === 'HT')}
           title = {'Todos HT'}
           deletetodos = {deletetodos}
        /> */}
        <input type='text' value={address} onChange={(event) => handleOnChange(event)} />
        <button onClick={(event) => clickMe(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
