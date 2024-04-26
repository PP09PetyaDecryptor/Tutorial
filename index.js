const keepAlive = require(`./server`);
keepAlive();

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});


function formatTime() { //Credits to V𝕀ꋊΛꌦ#1010
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1195468879837810768') // make your bot in discord.com/developers and paste the application ID here
    .setType('STREAMING')
    .setURL('https://roblox.com/') //Must be a youtube video link 
    .setState('LIFE IS ROBLOX!')
    .setName('IFE IS ROBLOX!')
    .setDetails(`Click on Watch to watch 22twice - Fly High subtitles!`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1231627991952396419/1233478432608747550/life_is_roblox.jpg?ex=662d3dcf&is=662bec4f&hm=f35ad93b8249e9bd8eb6ce6b1677c6e4327dd9a9ca2a91c829bd5f69f26b229f&') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('LIFE IS ROBLOX!') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1231627991952396419/1233478432608747550/life_is_roblox.jpg?ex=662d3dcf&is=662bec4f&hm=f35ad93b8249e9bd8eb6ce6b1677c6e4327dd9a9ca2a91c829bd5f69f26b229f&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('LIFE IS ROBLOX') //Text when you hover the Small image
    .addButton('LIFE IS ROBLOX!', 'https://roblox.com/')
    .addButton('JOIN THE BEST FANPAGE ROBLOX DISCORD SERVER!', 'https://dsc.gg/roblox-i-gadanie-pl/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `LIFE IS ROBLOX!`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);



// put your token in secrets
