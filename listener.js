const instagramListener = require('./listener/instagram');
const tiktokListener = require('./listener/tiktok');
const redditListener = require('./listener/reddit');
const twitterListener = require('./listener/twitter');

module.exports = (client) => {
    instagramListener(client);
    tiktokListener(client);
    redditListener(client);
    twitterListener(client);
};
