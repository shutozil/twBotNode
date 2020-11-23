
const twitter = require('twitter');

const twitter_client = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

exports.handler = (event, context, callback) => {

  twitter_client.post('statuses/update', {status: '今日もカップ麺を食べました。'},  function(error, tweet, response){
    if(error) {
      callback(null, 'tweet error.');
    }
    callback(null, 'tweet doen.');
  });
};