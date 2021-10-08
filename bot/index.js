const aoijs = require("aoi.js")
const Config = require("./bot/config.json")

const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "." //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands
bot.loadCommands(`./bot/commands/`)
bot.variables(`./bot/configs/vars.js`)

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! \`$ping\`ms` //Code
})

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})