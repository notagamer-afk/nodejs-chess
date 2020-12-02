var mongoose = require( 'mongoose' );
var DB_URL = process.env.DB_URL || 'mongodb://root:12345678@docdb-2020-12-02-15-22-59.cluster-cjc2siunmkts.us-east-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false/chessMEAN';
mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () {
 useMongoClient: true,
 console.log('Mongoose connected to ' + DB_URL); 
}); 

mongoose.connection.on('error', function (err) { 
  useMongoClient: true,
  console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose disconnected'); 
});

var user = require('./models/users');
var game = require('./models/games');

exports.user = user; 
exports.game = game;
