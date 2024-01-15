const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beautycheck')
        .setDescription('Reageerd met een antwoord op de vraag: "Ben ik mooi?"'),
    async execute(interaction) {
        const responses = ['Beetje', 'Nee, you ugly basterd!!!'];
        const randomIndex = Math.floor(Math.random() * responses.length);
        await interaction.reply(responses[randomIndex]);
    },
};