import logo from './logo.svg';
import './App.css';
import Nav from './views/nav.js';

function App() {
  const link = 'https://www.w3schools.com/howto/howto_js_topnav.asp';

  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>
        <a href={link}> Đi thôi</a> 
      </header>
    </div>
  );
}

export default App;
