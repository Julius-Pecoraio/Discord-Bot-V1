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
        const wait = require('node:timers/promises').setTimeout;

        // Check if the user is a specific Discord user
        if (interaction.user.id === '550058185021718528') { // 550058185021718528 = Julius
            await interaction.reply('Jij bent altijd mooi! Mijn POOKIE BEAR!');
        } else if (interaction.user.id === '189111588819697665') { // 189111588819697665 = Tafish
            await interaction.reply('Bro je naam is letterlijk Tafish, wat denk je zelf?');
        } else if (interaction.user.id === '727804645774196797') { // 727804645774196797 = Micha
            await interaction.reply('Bro je lijkt wel een uil, maar dan lelijk');
        } else if (interaction.user.id === '902974097179443200') { // 902974097179443200 = Mos
            await interaction.reply('Wil je dat echt weten?');
            await wait(2_000);
            await interaction.followUp('Want volgens mij ben je hier alleen maar voor de jonko\'s');
            await wait(2_000);
            await interaction.followUp('Julius trouwens ook, maar die is wel mooi! <3');
        } else {
            await interaction.followUp(responses[randomIndex]);
        }
    },
};