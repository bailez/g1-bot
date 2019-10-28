var functions = require('firebase-functions');
var twit = require('twit');
var config = require('./config.js');

var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
var Twitter = new twit(config);

toPost = 'ovo mexido muito dificil de comprar as vezes teste fea usp'

exports.tweetBest = functions.https.onRequest((req, res) => {
    
    Twitter.post('statuses/update', {status: toPost})
})
