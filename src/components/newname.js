import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
//import DBsync from './dbsync';

export default class Results extends React.Component {


  constructor(props){
    super(props);
    this.state={
      open: false,
      textvalue: '',
    }
    this.handleText = this.handleText.bind(this);
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    this.setState({textvalue:''});
  };

  handleOKClose = () => {
    this.setState({open: false});
    this.saveText(this.state.textvalue);
    this.setState({textvalue:''});
  };

  handleText = (event) => {
    this.setState({textvalue: event.target.value});
    
  };

  saveText(textvalue) {
    var retrievename = this.state.textvalue;

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
        onClick={this.handleOKClose}
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
         floatingLabelText="Insira aqui o seu apelido"
         value={this.state.textvalue}
         onChange={this.handleText}
        />
       </Dialog>
      </div>
    );
  }
}
