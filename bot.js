const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//NTMwOTc4NDEwNDQ1NTM3Mjgy.DxHTXg.xspGTnMkPyi-BKYxMxVFcxHoJyo
