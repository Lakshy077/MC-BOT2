const bedrock = require('bedrock-protocol');

const bot = bedrock.createClient({
  host: 'minecraft10.aternos.me',
  port: 55246,
  username: 'gamerpro453'
});

bot.on('connect', () => {
  console.log('Bot connected!');
});

bot.on('spawn', () => {
  console.log('Bot joined world!');
});
