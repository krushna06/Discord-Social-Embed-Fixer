module.exports = (client) => {
    client.on('messageCreate', message => {
        if (message.author.bot) return;

        const instagramRegex = /https:\/\/www\.instagram\.com\/([a-zA-Z0-9_\/?=-]*)/g;

        if (instagramRegex.test(message.content)) {
            const newLink = message.content.replace(instagramRegex, 'https://www.ddinstagram.com/$1');
            const formattedMessage = `[Link](${newLink})`;

            message.delete();
            message.channel.send(formattedMessage);
        }
    });
};
