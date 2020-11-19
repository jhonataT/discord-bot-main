const { Client, MessageEmbed, GuildMemberManager } = require('discord.js');

function serverInfo(client, message, embed = new MessageEmbed()){
    console.log("serverInfo");
    // send a MessageEmbed: 
    embed
    .addField('Message', 'TESTANDO ELE') 
    .setColor("#00FF7F")
    .setTitle("TESTE DO TESTE DO TESTE");

    message.channel.send(embed);
    // console.log(client.guilds)
    // const infoGuild = client.guilds.cache.map( (guild) => {
        


    // });



    console.log(message.guild.members.cache.map( (member) => member.user))
    // console.log(client.guilds);
}

module.exports = serverInfo;