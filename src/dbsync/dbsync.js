import rnsync from 'rnsync';

// init with your cloudant or couchDB database
var dbUrl = "https://user:pass@xxxxx";
var dbName = "name_xxxx";

rnsync.init(dbUrl, dbName, function(error)
{
  console.log(error);
}


//import database
var id = "whatever";

rnsync.retrieve(id, function(error, doc)
{
  console.log(JSON.stringify(doc.body));
}
