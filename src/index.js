require('dotenv').config();
const { Client, IntentsBitField, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.DirectMessageReactions,
    ],
});

client.once('ready', () => {
    console.log(`${client.user.tag} is online.`);

    // Function to send the poll
    const sendPoll = () => {
        const channel = client.channels.cache.get(process.env.CHANNEL_ID);
        if (channel) {
            const embed = {
                title: 'Free Company Actions',
                description: 'Which action do you want executed tomorrow?',
                color: 0x0099ff,
                fields: [
                    { name: '\u200B', value: '🇦  The Heat of Battle\n🇧  Earth and Water\n🇨  Helping Hand\n🇩  A Man\'s Best Friend\n🇪  Mark Up\n🇫  Seal Sweetener\n🇬  Jackpot\n🇭  Brave New World\n🇮  Live Off the Land\n🇯  What You See\n🇰  Eat from the Hand\n🇱  In Control\n🇲  That Which Binds Us\n🇳  Meat and Mead\n🇴  Prpoer Care\n🇵  Fleet\-footed\n🇶  Reduced Rates' },
                ],
            };
            
            channel.send({ embeds: [embed] })
                .then(message => {
                    message.react('🇦');
                    message.react('🇧');
                    message.react('🇨');
                    message.react('🇩');
                    message.react('🇪');
                    message.react('🇫');
                    message.react('🇬');
                    message.react('🇭');
                    message.react('🇮');
                    message.react('🇯');
                    message.react('🇰');
                    message.react('🇱');
                    message.react('🇲');
                    message.react('🇳');
                    message.react('🇴');
                    message.react('🇵');
                    message.react('🇶');
                })
                .catch(console.error);
        } else {
            console.error(`Channel with ID ${process.env.CHANNEL_ID} not found.`);
        }
    };

    // Send the poll when the bot starts
    sendPoll();

    // Set the time for the poll to be sent (in UTC time)
    const pollTimeUTC = { hour: 18, minute: 0, second: 0 }; // 12:00 PM UTC

    // Calculate milliseconds until next poll time
    const now = new Date();
    const nextPollTime = new Date(now);
    nextPollTime.setUTCHours(pollTimeUTC.hour, pollTimeUTC.minute, pollTimeUTC.second, 0);
    if (nextPollTime <= now) {
        nextPollTime.setUTCDate(nextPollTime.getUTCDate() + 1);
    }
    const timeUntilNextPoll = nextPollTime - now;

    // Schedule sending the poll at the specified time every day
    setInterval(sendPoll, timeUntilNextPoll);
});

client.login(process.env.TOKEN);
