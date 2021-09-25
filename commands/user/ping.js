module.exports = {
  name: "ping",
  ownerOnly: {
    status: true,
    errorMsg:"Hey {user.name} , you are not my owner!",
    deletable:3000
  },
  code(msg, args, client) {
    msg.reply("pong")
  },
};
