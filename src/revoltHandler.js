const myFunc = require("./function/replaceText");
const replaceText = new myFunc().replaceMessage;
module.exports = (message, args, client, handlerClient, owners) => {
  const commandName = args.shift().toLowerCase();
  const command =
    handlerClient.commands.get(commandName) ||
    handlerClient.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );
  try {
    if (!command) return;
    if (command.ownerOnly) {
      if (command.ownerOnly.status) {
        if (owners.includes(message.author_id) === false) {
          if (command.ownerOnly.errorMsg) {
            return replaceText(
              message,
              command.ownerOnly.errorMsg,
              command.name,
              command.ownerOnly.deletable,
              client
            );
          } else {
            return message.reply("You cannot do this!");
          }
        }
      }
    }
    if (command.guildOnly) {
      if (command.ownerOnly.status) {
        if (!message.channel.server_id) {
          if (command.ownerOnly.errorMsg) {
            return replaceText(
              message,
              command.ownerOnly.errorMsg,
              command.name,
              command.ownerOnly.deletable,
              client
            );
          } else {
            return message.reply("You cannot do this command in DM group");
          }
        }
      }
    }
    command.code(message, args, client);
  } catch (error) {
    console.error(error);
  }
};
