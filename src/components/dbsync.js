import Firebase from 'firebase';


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


export function getName (){
  return name => {
    UCRef.on('value', snapshot => {
      this.setState({name: snapshot.val()});
    });}

}


export function postName(post){
  return dispatch => {UCRef.push(post)};

}

module.exports = {
    postName: postName, // (A)
    getName: getName,
};
