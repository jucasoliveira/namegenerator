import React from 'react';
import logo from './gear.svg';
import './App.css';
import Results from './components/result.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var App = React.createClass ({


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Bem vindo ao Odebrecht : Gerador de Apelidos</h2>
          </div>
          <p className="App-intro">
            Para comecar, clique
          </p>
          <div>
            <Results/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
})

export default App;
