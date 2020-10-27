import React from 'react';
import logo from './logo.svg';
import './App.css';
import Qm from './components/Qm'

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Store the record of your vote on <a href="https://www.urbandictionary.com/define.php?term=Web3">Web3</a>
        </p>
        <a
          className="App-link"
          href="ALEX-LINK-IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upload Your Vote
        </a>
        <a
          className="App-link"
          href="ALEX-LINK-OUT"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Your Vote
        </a>
      </header>
      <body>
        <div>
          <Qm></Qm>
        </div>
      </body>
    </div>
  );
}

export default App;
