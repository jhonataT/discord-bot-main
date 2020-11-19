const ping = async (client, message) => {
    console.log("!!ping")
    const msg = await message.channel.send("Ping?");
    msg.edit(`Latência: ${client.ws.ping}ms.`)
} 

module.exports = ping; 