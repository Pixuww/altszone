const Discord = require('discord.js');
const token = process.env.token;

var bot = new Discord.Client();
var prefix = ("!");

var logo = ("https://imgur.com/57IWAwk.png")
var serv = ("https://imgur.com/k0vZc1K.png")

bot.on('ready', () =>{
    bot.user.setActivity("www.altszone.pw");
    console.log("Prêt à être utilisé");
});

bot.login(token);

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "welcome").send(`:tada: Welcome ${member} feel free to visit our website __**www.altszone.pw**__ and read the rules :closed_lock_with_key: `);

});
