const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beautycheck')
        .setDescription('Reageerd met een antwoord op de vraag: "Ben ik mooi?"'),
    async execute(interaction) {
        const responses = ['Beetje', 'Nee, you ugly basterd!!!'];
        const randomIndex = Math.floor(Math.random() * responses.length);

        // Check if the user is a specific Discord user
        if (interaction.user.id === '550058185021718528') {
            await interaction.reply('Jij bent altijd mooi! Mijn POOKIE BEAR!');
        } else {
            await interaction.reply(responses[randomIndex]);
        }
    },
};