const Discord = require('discord.js');

const exampleEmbed = new Discord.MessageEmbed()
.setColor('00FF00')
.setTitle('Typing trainer')
.addFields(
    { name: 'Text: ', value: "test"}
)

module.exports = {
    name: 'typing',
    description: 'displays the generated string',
    execute(message, args){
        message.channel.send(exampleEmbed)
    }
}