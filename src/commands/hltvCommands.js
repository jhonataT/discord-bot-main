const { MessageEmbed } = require('discord.js');
const { HLTV } = require('hltv');

class hltv {
    static async result(team, message){
        const infos = await HLTV.getResults({startPage:0,endPage:1});
        for(let i = 0; i < infos.length; i++){
            if(infos[i].team1.name.toLocaleLowerCase() === team.toLocaleLowerCase()){
                console.log(infos[i]);
                const embed = new MessageEmbed();
                embed
                .setColor('#8A2BE2')
                .setTitle("Sobre o último jogo:")
                .addField(`${infos[i].team1.name} X ${infos[i].team2.name}`, `Resultado: ${infos[i].result}`)
                .addField('Formato:', infos[i].format)
                .addField('Evento:', infos[i].event.name)
                .setThumbnail('https://lh3.googleusercontent.com/proxy/MOo5nthJVlZLYgL-2b4d_YZgmhu1zsQozrgUNHSFO0NguUl8GMUts3Dc9U1wug1z74-8WFlu2e1mqmPgdypwz3PQuGnm1ERWYV4aVYa8qFaLCSJ_YH-m2DmhT0HfeJjN5Q')
                .setImage(infos[i].team1.logo);
                
                message.channel.send(embed);
                break;
            }
            else if(infos[i].team2.name.toLocaleLowerCase() === team.toLocaleLowerCase()){
                console.log(infos[i]);
                const embed = new MessageEmbed();
                embed
                .setColor('#8A2BE2')
                .setTitle("Sobre o último jogo:")
                .addField(`${infos[i].team1.name} X ${infos[i].team2.name}`, `Resultado: ${infos[i].result}`)
                .addField('Formato:', infos[i].format)
                .addField('Evento:', infos[i].event.name)
                .setThumbnail('https://lh3.googleusercontent.com/proxy/MOo5nthJVlZLYgL-2b4d_YZgmhu1zsQozrgUNHSFO0NguUl8GMUts3Dc9U1wug1z74-8WFlu2e1mqmPgdypwz3PQuGnm1ERWYV4aVYa8qFaLCSJ_YH-m2DmhT0HfeJjN5Q')
                .setImage(infos[i].team2.logo);
                
                message.channel.send(embed);
                break;
            }   
        }
    }
}

module.exports = hltv;