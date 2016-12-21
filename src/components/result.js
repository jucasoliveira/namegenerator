import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Firebase from 'firebase';
//import Dbsync from './dbsync';

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyDbvEQXI1rv1-AEutNKreqxmWpgjltCh_w",
    authDomain: "namegenenrator.firebaseapp.com",
    databaseURL: "https://namegenenrator.firebaseio.com",
    storageBucket: "namegenenrator.appspot.com",
    messagingSenderId: "807735289237"
  };
Firebase.initializeApp(config);


// Get a reference to the database service
var database = Firebase.database();
var UCRef = database.ref("names/results");


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
    var uc = UCRef.on('value', snapshot => {
      this.setState({name: snapshot.val()});
    });
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
