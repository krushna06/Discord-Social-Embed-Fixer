module.exports = (client) => {
    client.on('messageCreate', message => {
        if (message.author.bot) return;

        const tiktokRegex = /https:\/\/www\.tiktok\.com\/(@?[a-zA-Z0-9_\/?=-]*)/g;

        if (tiktokRegex.test(message.content)) {
            const newLink = message.content.replace(tiktokRegex, 'https://www.vxtiktok.com/$1');
            const formattedMessage = `[Link](${newLink})`;

            message.delete();
            message.channel.send(formattedMessage);
        }
    });
};
