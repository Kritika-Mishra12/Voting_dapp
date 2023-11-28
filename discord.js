const Discord = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const webhookClient = new Discord.WebhookClient({
    url: process.env.WEBHOOK_URL,
});

webhookClient.send("Hello from the bot");