const Discord = require('discord.js');
const client = new Discord.Client();
 
 
 
 
client.login("mfa.dGlPqMQ3Pkhp79akETwDStOcHXIEk7rVKYf_W7KdRY_pPCAvaFArZ380MDJEbtfhG5VhpoPPu0fkYjsEa63Z");
 
 
 
 
client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});
 
 
 
 
 
 
const devs = ["260400980246396928"];
const adminprefix = ["!"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith('!ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('!wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith('!ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith('!st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/overwatchleague");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('!setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('!setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 
 
client.on('message', message => {
  if (message.content === 'البرفيكس') {
      if (message.author.id !== '260400980246396928') return message.react('?')
    const channel = message.member.voiceChannel;
 
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});
