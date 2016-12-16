import React from 'react';
import logo from './gear.svg';
import './App.css';
import Results from './components/result.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

var App = React.createClass ({


  render() {
    const FlatButtonExampleComplex = () => (
  <div>
    <FlatButton
      href="https://github.com/jucasoliveira/namegenerator"
      target="_blank"
      label="GitHub Link"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
);

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
          <p>
          <FlatButtonExampleComplex/>
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
})

export default App;
