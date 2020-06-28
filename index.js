const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzE1MDE4NDcwODQ4MzMxNzk3.XvhaPQ.lT4bJu4YShn8AZ_KscyfcFKrio8';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);
