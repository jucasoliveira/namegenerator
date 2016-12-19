import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Results extends React.Component {


  constructor(props){
    super(props);
    this.state={
      open: false,
    }
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };



  render() {


    const actions = [
      <FlatButton
        label="CANCELAR"
        primary={true}
        onClick={this.handleClose}
      />,
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
        <TextField
         hintText="Escreva o apelido"
         floatingLabelText="Insira aqui o seu apelido"
        />
       </Dialog>
      </div>
    );
  }
}
