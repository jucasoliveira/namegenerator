import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DBsync from './dbsync';


export default class Results extends React.Component {


  constructor(props){
    super(props);
    this.state={
      name:[],
      open: false,
    }
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidMount() {
      //this.setState({name: DBsync.getName()});
      this.setState({name:DBsync.getName()});
  };


  render() {

    var pickresults = this.state.name;
    var possible = pickresults[Math.floor(Math.random() * pickresults.length)];

    const actions = [
      <FlatButton
        label="SHARE"
        href="https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer"
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
          {possible}
        </Dialog>
      </div>
    );
  }
}
