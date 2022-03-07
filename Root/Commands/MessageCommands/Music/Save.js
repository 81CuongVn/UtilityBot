const db = require('quick.db');

module.exports = {
  name: "save",
  description: "save",
  voiceChannel: true,

  run: async(client, message, args, container) => {
        
    let lang = client.langs.get(db.get(`lang_${message.guild.id}`) || 'en');
    
const queue = client.player.getQueue(message.guild.id);

  if (!queue || !queue.playing) return message.reply({
    embeds: [
      new container.Discord.MessageEmbed()
      .setColor(container.Colors.RED)
      .setFooter({ text: `© ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
      .setTimestamp()
      .setDescription(`  ${lang.commands.music.AnyM[0]}`)
    ]
  });

        message.author.send({
          embeds: [
            new container.Discord.MessageEmbed()
            .setColor(container.Colors.PERSO)
            .setFooter({ text: `© ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
            .setTimestamp()
            .setDescription(`  ${lang.commands.music.Save[0]} **${queue.current.title}** | ${queue.current.author}, ${lang.commands.music.Save[1]} **${message.guild.name}**`)
          ]
        }) .then(() => {
            message.reply({
              embeds: [
                new container.Discord.MessageEmbed()
                .setColor(container.Colors.VERT)
                .setFooter({ text: `© ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
                .setDescription(`  ${lang.commands.music.Save[2]}`)
              ]
            });
        }).catch(error => {
            message.reply({
              embeds: [
                new container.Discord.displayAvatarURL()
                .setColor(container.Colors.RED)
                .setFooter({ text: `© ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
                .setDescription(`  ${lang.commands.music.Save[3]}`)
              ]
            });
        });
      }
    }