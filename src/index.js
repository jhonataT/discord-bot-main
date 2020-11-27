if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const ping = require('./commands/ping')
const hltv = require('./commands/hltvCommands') 
const PREFIX = "!"

client.on('ready', readyDiscord);



client.on("message", (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        console.log(args.length)
        
        
        if(CMD_NAME.toLowerCase() === "ping" && args.length === 0) ping(client, message);
        else if(CMD_NAME.toLowerCase() === "team" && args.length != 0){
            hltv.result(args.toString(), message);
        }

    }
});

function readyDiscord(){
    let membersSize = 0;
    client.guilds.cache.map( (guild) => membersSize += guild.memberCount); 
    console.log(`O BOT ESTÁ ONLINE EM [ ${client.guilds.cache.size} ] SERVERS. COM ${membersSize} MEMBROS`)
    // change activity status
    client.user.setPresence({
        activity: { name: `[ ${client.guilds.cache.size} ] servidores.`, type: "WATCHING" },
        status: 'READY' 
    });
}

client.login(process.env.DISCORDJS_BOT_TOKEN);