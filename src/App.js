import React, { Component } from 'react';
import logo from './gear.svg';
import './App.css';
import Results from './components/result.js';


var App = React.createClass ({

  getInitialState () {
         return { showResults: false };
   },
   onClick () {
       this.setState({ showResults: true });
   },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem vindo ao Odebrecht : Gerador de Apelidos</h2>
        </div>
        <p className="App-intro">
          Para comecar, clique
        </p>
        <div>
          <button onClick={this.onClick}>AQUI</button>
          <p>{ this.state.showResults ? <Results /> : null }</p>
        </div>
      </div>
    );
  }
})

export default App;
