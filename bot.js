const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`hi`, {type: "PLAYING"});
});






client.login(process.env.BOT_TOKEN);
