const Discord = require('discord.js');
const stringMaker = new require('./stringGenerator.js');
const exampleEmbed = new Discord.MessageEmbed()
.setColor('00FF00')
.setTitle('Typing trainer')

module.exports = {
    name: 'typing',
    description: 'displays the generated string',
    execute(message, args){
        stringMaker.execute();
        exampleEmbed.setDescription(stringMaker.textString)
        message.channel.send(exampleEmbed)   
    }
}