// listener/twitter.js
module.exports = (client) => {
    client.on('messageCreate', message => {
        if (message.author.bot) return;

        const twitterRegex = /https:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[a-zA-Z0-9_\/?=-]*/g;

        if (twitterRegex.test(message.content)) {
            const newLink = message.content.replace(twitterRegex, url => url.replace(/https:\/\/(?:www\.)?(?:twitter\.com|x\.com)\//, 'https://www.fxtwitter.com/'));
            const formattedMessage = `[Link](${newLink})`;

            message.delete();
            message.channel.send(formattedMessage);
        }
    });
};
