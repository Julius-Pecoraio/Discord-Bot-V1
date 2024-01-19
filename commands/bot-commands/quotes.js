const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quotes')
        .setDescription('Reageerd met een quote'),
    async execute(interaction) {
        const responses = [
            '"You must be the change you wish to see in the world."\n-Mahatma Gandhi',
            '"You must do the things you think you cannot do."\n-Eleanor Roosevelt',
            '"You can never cross the ocean until you have the courage to lose sight of the shore."\n-Christopher Columbus',
            '"The future belongs to those who believe in the beauty of their dreams."\n-Eleanor Roosevelt',
            '"Believe you can and you\'re halfway there."\n-Theodore Roosevelt',
            '"To handle yourself, use your head; to handle others, use your heart."\n-Eleanor Roosevelt',
            '"Nothing is impossible, the word itself says, “I’m possible!”"\n-Audrey Hepburn',
            '"It is never too late to be what you might have been."\n-George Eliot',
            '"Happiness is not something readymade. It comes from your own actions."\n-Dalai Lama XIV',
            '"Whatever you are, be a good one."\n-Abraham Lincoln',
            '"Impossible is just an opinion."\n-Paulo Coelho',
            '"Your passion is waiting for your courage to catch up."\n-Isabelle Lafleche',
            '"Magic is believing in yourself. If you can make that happen, you can make anything happen."\n-Johann Wolfgang Von Goethe',
            '"If you want to lift yourself up, lift up someone else."\n-Booker T. Washington',
            '"We can do anything we want to if we stick to it long enough."\n-Helen Keller',
            '"Great things never came from comfort zones."\n-Neil Strauss',
            '"The only way to achieve the impossible is to believe it is possible."\n-Charles Kingsleigh',
            '"If you don’t like the road you’re walking, start paving another one."\n-Dolly Parton',
            '"The secret of getting ahead is getting started."\n-Mark Twain',
            '"If you can dream it, you can do it."\n-Walt Disney',
            '"The best way to predict the future is to create it."\n-Abraham Lincoln',
            '"The best revenge is massive success."\n-Frank Sinatra',
            '"The best time to plant a tree was 20 years ago. The second best time is now."\n-Chinese Proverb',
            '"If you want to lift yourself up, lift up someone else."\n-Booker T. Washington',
            '"The only person you are destined to become is the person you decide to be."\n-Ralph Waldo Emerson',
            '"The only way to do great work is to love what you do."\n-Steve Jobs',
            '"If you can dream it, you can achieve it."\n-Zig Ziglar',
            '"Don’t wait. The time will never be just right."\n-Napoleon Hill',
            '"If you can’t outplay them, outwork them."\n-Ben Hogan',
            '"The harder the conflict, the greater the triumph."\n-George Washington',
            '"The secret of success is to do the common thing uncommonly well."\n-John D. Rockefeller Jr.',
            '"I find that the harder I work, the more luck I seem to have."\n-Thomas Jefferson',
            '"Success is the sum of small efforts, repeated day-in and day-out."\n-Robert Collier',
            '"Success is going from failure to failure without losing your enthusiasm."\n-Winston Churchill',
            '"The secret to success is to know something nobody else knows."\n-Aristotle Onassis',
            '"I attribute my success to this: I never gave or took any excuse."\n-Florence Nightingale',
            '"Success is largely a matter of holding on after others have let go."\n-Unknown',
            '"If you want to achieve greatness stop asking for permission."\n-Anonymous',
            '"Things work out best for those who make the best of how things work out."\n-John Wooden',
            '"To live a creative life, we must lose our fear of being wrong."\n-Anonymous',
        ];
        const randomIndex = Math.floor(Math.random() * responses.length);
        await interaction.reply(responses[randomIndex]);
    },
};