import logo from './logo.svg';
import './App.css';
import Nav from './views/nav.js';
import Covid from './views/covid.js';
import Blog from './views/blog';
import Todo from './views/todo';
import Fullblog from './views/fullblog';
import NewCountDown from './views/countdown.js';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

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

  const onTimesup = () => {
    alert('times up')
  }

  return (
    <Router>
      <div className="App">
        <Nav />

        <header className="App-header">

          <img style={{ marginTop: '50px' }} src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={
              <>
                <h1>Hello {name}</h1>
                <NewCountDown onTimesup={onTimesup} />
                <a href={link}> Đi thôi</a>
              </>
            } />
            <Route path="/covid19" element={<>
              < Covid />
            </>} />
            <Route path="/todo" element={<>
              <Todo
                todos={todos}
                title={'Todos Alls'}
                deletetodos={deletetodos}
              />
              <Todo
                todos={todos.filter(todo => todo.type === 'HT')}
                title={'Todos HT'}
                deletetodos={deletetodos}
              />
            </>} />
            <Route path="/blog" element={<>
              < Blog />
            </>} />
          <Route path="/blog/:id" element={<>
              < Fullblog />
            </>} />
          </Routes>

          
          <input type='text' value={address} onChange={(event) => handleOnChange(event)} />
          <button onClick={(event) => clickMe(event)}>Click me</button>
        </header>
      </div>
    </Router>
  );
}

export default App;
