const express = require("express");
const app = express();app.listen(3000, () => {
  console.log("Logged In The Bot");
})

app.get("/", (req, res) => {
  res.send("Welcome to the official site of Terminator 2.0.If you want a better bot than Terminator2.0 contact the owner on discord username-[OP]Snowie");
})

const Discord = require("discord.js");
const bot = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

bot.on("ready", () => {
 bot.user.setPresence({ activity : { name: "Minecraft" }, status : "dnd"})
})


const MainClient = require("./nanospace");
const client = new MainClient();
client.connect()

module.exports = client; 