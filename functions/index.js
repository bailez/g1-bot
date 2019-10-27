const functions = require('firebase-functions');
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

var admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)    

exports.showTwitter = functions.https.onRequest((request, response) => {
    response.send(Twitter);
    });