const bedrock = require('bedrock-protocol');

const bot = bedrock.createClient({
  host: 'play.applemc.fun',
  port: 19132,
  username: 'gamerpro453'
});

bot.on('connect', () => {
  console.log('Bot connected!');
});

bot.on('spawn', () => {
  console.log('Bot joined world!');
});
