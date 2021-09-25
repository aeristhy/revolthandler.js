module.exports = {
    name: "server-icon",
    aliases: ["server-pfp"],
    ownerOnly: {
      status: true,
      errorMsg: "Hey **{user.name}**, You don't use this command",
      deletable: 3000,
    },
    code(message, args, client) {
      msg.channel.sendMessage("https://autumn.revolt.chat/icons/"+client.servers.get(msg.channel.server_id).icon._id)
    },
  };
