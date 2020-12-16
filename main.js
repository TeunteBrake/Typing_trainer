const Discord = require('discord.js');

const client = new Discord.Client();

const prefix =  "TTB ";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Line of code here');
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get("ping").execute(message, args);
    }
    else if(command === 'string'){
        client.commands.get("string").execute(message, args);
        client.commands.get("typing").execute(message, args);
    }
});

//MAKE SURE THIS IS THE LAST LINE OF CODE
client.login('NzcyMTEzMDY4NzU4NTMyMTE2.X518VA.5xs-cZDlGgUSaov3Z3R-6KeDMkM');