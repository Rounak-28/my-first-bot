require("dotenv").config()
require("./index")
require("./server")

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", ()=>{
    console.log("bot is ready!")
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
    if (interaction.commandName === 'rk') {
        await interaction.reply('https://github.com/rounak-28');
      }
  });

client.login(process.env.BOT_TOKEN);