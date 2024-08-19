module.exports = (client) => {
    client.on('messageCreate', message => {
        if (message.author.bot) return;

        const redditRegex = /https:\/\/www\.reddit\.com\/r\/[a-zA-Z0-9_\/?=-]*/g;

        if (redditRegex.test(message.content)) {
            const newLink = message.content.replace(redditRegex, 'https://www.rxddit.com/$&');
            const formattedMessage = `[link](${newLink})`; 
            message.delete();
            message.channel.send(formattedMessage);
        }
    });
};