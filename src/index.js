require('dotenv').config();

const { Client, Message } = require('discord.js');
const client = new Client();

client.on('ready', () => { console.log(`bot on!!`) });

client.on("message", (message) => { 


});








client.login(process.env.DISCORDJS_BOT_TOKEN);
// https://discord.com/oauth2/authorize?client_id=777676887002054678&scope=bot