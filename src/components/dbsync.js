import React, { Component } from 'react';
import Firebase from 'firebase';





export default class Dbsync extends React.Component {
  render() {
  var config = {
      apiKey: "YOURAPIKEY",
      authDomain: "namegenenrator.firebaseapp.com",
      databaseURL: "https://namegenenrator.firebaseio.com",
      storageBucket: "namegenenrator.appspot.com",
      messagingSenderId: "YOURSENDER"
    };
  Firebase.initializeApp(config);
  // Get a reference to the database service
  var database = Firebase.database();
  var UCRef = database.ref("names/results");

  }
}
