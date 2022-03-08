
const db = require('quick.db');
const colors = require('../../../Storage/json/colors.json')

module.exports = {

    name: 'fun-bird',
    aliases: ['f-bi'],
    cooldown: 5000,

    run: async(client, message, args, container) => {
        
        let lang = client.langs.get(db.get(`lang_${message.guild.id}`) || 'en');
        
        const birddr = [
            "https://media.giphy.com/media/5PSPV1ucLX31u/giphy.gif",
            "https://media.giphy.com/media/LZElUsjl1Bu6c/giphy.gif",
            "https://media.giphy.com/media/bvnoMS2RpDuSY/giphy.gif",
            "https://media.giphy.com/media/6mr2y6RGPcEU0/giphy.gif",
            "https://media.giphy.com/media/nQZVy7bYWEKK4/giphy.gif",
            "https://media.giphy.com/media/vsGnvQD0ZcQco/giphy.gif",
            "https://media.giphy.com/media/l0HlIo3bPNiMUABt6/giphy.gif",
            "https://media.giphy.com/media/1n5eMh3mUUw12/giphy.gif",
            "https://media.giphy.com/media/121rAYEbiE01oI/giphy.gif",
            "https://media.giphy.com/media/BU1rWEqbUTXWw/giphy.gif",
            "https://media.giphy.com/media/5Dr8VvwXGngbe/giphy.gif",
            "https://media.giphy.com/media/1hWHUCgi3wKT6/giphy.gif",
            "https://media.giphy.com/media/WP2ujrEnniG2mSyxgM/giphy.gif"
        ]
        const birdd = birddr[Math.floor(Math.random() * birddr.length)];

        message.reply({
            embeds: [
            new container.Discord.MessageEmbed()
            .setColor(colors.PERSO)
            .setTitle(lang.commands.fun.animaux[0])
            .setURL(birdd)
            .setDescription(`${container.Emotes.bird} ${lang.commands.fun.animaux[2]} ${container.Emotes.bird}`)
            .setImage(birdd)
             .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setTimestamp()
        ]});
    }
}