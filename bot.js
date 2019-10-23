const config = require('./config')
const twit = require('twit')
const Twitter = new twit(config)

console.log('Hello World')

functon retweet()
{
    let params={
        q:'#got',
        result_type: 'recent',
        count: 100
    }
    
}