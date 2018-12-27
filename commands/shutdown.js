module.exports.run = (bot, message, args) => {
  const embed = new (require('discord.js').RichEmbed)()
  .setTitle("FHGBot Shutdown")
  .setDescription("Shutting down... :wave:")
  .setTimestamp()
  .setColor("RED")
  message.channel.send({embed: embed});
  process.exit(666);
}

module.exports.help = {name: "shutdown"}
