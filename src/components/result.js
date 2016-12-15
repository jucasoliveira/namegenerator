import React, { Component } from 'react';


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



export default Results;
