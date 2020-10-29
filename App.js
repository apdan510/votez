import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CreateBucket from './components/CreateBucket';
import CreateFolder from './components/CreateFolder';
import UploadFiles from './components/UploadFiles';
import OpenFile from './components/OpenFile';
import JoinBucket from './components/JoinBucket';
import GenerateKeyPair from './components/GenerateKeyPair';
//Below imports added by Mike
import logo from './logo.svg';
import './App.css';
import Qm from './components/Qm';



const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
       <header className="App-header">
       <a>
          Store the record of your vote on <a href="https://www.urbandictionary.com/define.php?term=Web3">Web3</a>
       </a>
       <p>

       </p>
         <img src={logo} className="App-logo" alt="logo" />
         <p>

         </p>
         <a
          className="App-link"
          href="<GenerateKeyPair />"
          target="<GenerateKeyPair />"
          rel="<GenerateKeyPair />"
         >Generate/Activate Login Key
        </a>
         <a
          className="App-link"
          href="<UploadFiles />"
          target="<UploadFiles />"
          rel="<UploadFiles />"
         >Upload Your Vote
          </a>
         <a
           className="App-link"
           href="<OpenFile />"
           target="<OpenFile />"
            rel="<OpenFile />"
          >View Your Vote
           </a>
		<a
          className="App-link"
          href=" <CreateBucket />"
          target=" <CreateBucket />"
          rel=" <CreateBucket />"
         >View Blockchain Link
        </a>
          </header>
    </div>
	<body>
		<div>
			<Qm></Qm>
		</div>
  </body>
    </ThemeProvider>
  );
}

export default App;
