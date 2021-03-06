import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Firebase from 'firebase';
//import Dbsync from './dbsync';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

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

const {
  FacebookShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');


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

  componentDidMount = () => {
    UCRef.on('value', snapshot => {
      this.setState({name: snapshot.val()});
    });
  };



  render() {

    const shareUrl = 'https://jucasoliveira.github.io/namegenerator/';

    var pickresults = this.state.name;
    var possible = pickresults[Math.floor(Math.random() * pickresults.length)];
    var title = "Meu apelido da Odebrecht é " + possible + " e o seu? Descubra o seu apelido!";

    const actions = [
      <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FlatButton
              label="SHARE"
              primary={true}
              onClick={this.handleClose}
            />
      </FacebookShareButton>,
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
