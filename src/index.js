if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!!"

client.on('ready', () => {
    // show members and servers numbers:
    let membersSize = 0;
    client.guilds.cache.map( (guild) => membersSize += guild.memberCount); 
    console.log(`O BOT ESTÁ ONLINE EM [ ${client.guilds.cache.size} ] SERVERS. COM ${membersSize} MEMBROS`)
    // change activity status
    client.user.setPresence({
        activity: { name: `[ ${client.guilds.cache.size} ] servidores.`, type: "WATCHING" },
        status: 'READY' 
    })
});

client.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        
        console.log(args.length)
        
        if(CMD_NAME === "ping" && args.length === 0){
            console.log(`Latência da API: ${Math.round(client.ping)}ms.`)
            const msg = await message.channel.send("Ping?");
            msg.edit(`Latência: ${msg.createdTimestamp - message.createdTimestamp}ms.`)
        }
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);