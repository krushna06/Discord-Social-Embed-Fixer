const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const instagramRegex = /https:\/\/www\.instagram\.com\/([a-zA-Z0-9_\/?=-]*)/g;

    if (instagramRegex.test(message.content)) {
        const newLink = message.content.replace(instagramRegex, 'https://www.ddinstagram.com/$1');
        const formattedMessage = `[link](${newLink})`;

        message.delete();
        message.channel.send(formattedMessage);
    }
});

client.login(process.env.TOKEN);
