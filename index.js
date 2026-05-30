const bedrock = require('bedrock-protocol');

const bot = bedrock.createClient({
  host: play.applemc.fun,
  port: 19132,
  username: 'Gamerboy83894'
});

bot.on('join', () => {
  console.log('Bot joined!');
});

bot.on('text', (packet) => {
  const msg = packet.message || '';

  if (msg.includes('!accept')) {
    bot.queue('command_request', {
      command: '/tpaccept',
      version: 1,
      origin: {
        type: 0,
        uuid: '',
        request_id: ''
      },
      internal: false
    });
  }
});
