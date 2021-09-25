const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");
const handlerClient = {};
handlerClient.commands = new Discord.Collection();
class handler {
  constructor(
    op = { client: Object, prefix: String, folder: String, owners: Array }
  ) {
    this.folder = op.folder;
    this.client = op.client;
    this.prefix = op.prefix;
    this.owners = op.owners;
  }
  start() {
    const bot = this.client;
    const commandsFolder = fs.readdirSync(path.resolve(`${this.folder}`));
    for (const folder of commandsFolder) {
      const commandFiles = fs
        .readdirSync(`./commands/${folder}/`)
        .filter((file) => file.endsWith(".js"));
      for (const file of commandFiles) {
        console.log(file);
        const command = require(path.resolve(
          `./${this.folder}/${folder}/${file}`
        ));
        if (!command.name || !command.code) {
          console.log(
            `Failed Loaded command from ${path.resolve(
              this.folder + "/" + folder + "/" + file
            )} with revolthandler.js`
          );
        } else {
          console.log(
            `Waking up '${command.name}' from ${path.resolve(
              this.folder + "/" + folder + "/" + file
            )} with revolthandler.js`
          );
          handlerClient.commands.set(command.name, command);
        }
      }
    }
    bot.on("message", (message) => {
      let owners = this.owners;
      if (
        !message.content.startsWith(this.prefix) ||
        bot.users.get(message.author_id).bot
      )
        return;
      if (message.content.type) return;
      const args = message.content.slice(this.prefix.length).trim().split(/ +/);
      require("./revoltHandler")(message, args, bot, handlerClient, owners);
    });
  }
}

module.exports = {
  Handler: handler,
};
