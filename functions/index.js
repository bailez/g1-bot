var functions = require('firebase-functions');
var twit = require('twit');
var config = require('./config.js');
var XMLHttpRequest = require('xhr2');
var dictionary = require('./dictionary.js')

var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
var Twitter = new twit(config);

toPost = 'test'

exports.tweetBest = functions.https.onRequest((req, res) => {
    
    Twitter.post('statuses/update', {status: toPost},  function(error, tweet, response){
        if(error){
            console.log(error);
        }
        console.log(tweet);  // Tweet body.
        console.log(response);
        return res.send('New tweet, YAY!');  // Raw response object.
      
    });
})
