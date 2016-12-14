import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




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
          { this.state.showResults ? <Results /> : null }
        </div>
      </div>
    );
  }
})

var Results = React.createClass ({
  render () {
            var names = { "results" :[
              "porco-velho",
              "muricoca",
              "pouco feio",
              "louca",
              "Caju",
              "Justica",
              "Indio",
              "Primo",
              "Las Vegas",
              "Angora",
              "Caranguejo",
              "Cerrado/Piqui",
              "Polo",
              "Gremista",
              "Babel",
              "Bitelo",
              "Campari",
              "Gripado",
              "Botafogo",
              "Misericordia",
              "Ferrari",
              "Corredor",
              "Todo Feio",
              "Jovem",
              "Feia",
              "Comuna",
              "Goleiro",
              "Diplomata",
              "Moleza",
              "Velhinho"
              ]
            };

            var pickresults = names.results;
            var possible = pickresults[Math.floor(Math.random() * pickresults.length)];
            return (
                       <div id="results" className="search-results" dangerouslySetInnerHTML={{__html: possible}}></div>
                   );
        }
})

export default App;
