const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clearchat')
        .setDescription('Deze command werkt momenteel niet.'),
    async execute(interaction) {
        const channel = interaction.channel;
        const messages = await channel.messages.fetch({
            limit: 100
        });
        message.channel.bulkDelete(100).then(() => {
            message.channel.send("Deleted 100 messages.").then(msg => msg.delete(3000));
        });
    }
};