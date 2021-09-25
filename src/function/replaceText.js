class myFunc {
  constructor() {}
  replaceMessage(message, errorMsg, cmdName, bool, client) {
    let sendingMsg = errorMsg
      .replace(/{user.name}/g, client.users.get(message.author_id).username)
      .replace(/{user.id}/g, message.author_id)
      .replace(/{command.name}/g, cmdName);
    if (bool || bool !== 0) {
      return message.reply(sendingMsg).then((x) =>
        setTimeout(() => {
          x.delete();
        }, bool)
      );
    } else {
      return message.reply(sendingMsg);
    }
  }
}
module.exports = myFunc;
