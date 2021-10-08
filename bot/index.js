const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "." //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! \`$ping\`ms` //Code
})

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})