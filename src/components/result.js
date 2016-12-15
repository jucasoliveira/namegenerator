import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class Results extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    var names = { "results" :[
      "Porco-velho",
      "Muricoca",
      "Pouco feio",
      "Louca",
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
    
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Aqui" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {possible}
        </Dialog>
      </div>
    );
  }
}
