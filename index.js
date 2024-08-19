const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const instagramListener = require('./listener/instagram');
const tiktokListener = require('./listener/tiktok');
const redditListener = require('./listener/reddit');

instagramListener(client);
tiktokListener(client);
redditListener(client);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
