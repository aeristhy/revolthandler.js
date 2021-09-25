const myModule = require("./src/index");
const revolt = require("revolt.js");
const bot = new revolt.Client();
const handler = new myModule.Handler({
  client: bot,
  prefix: "!",
  folder: "./commands",
  owners: ["01FCXFBQPYCBZWX40NSBYXYAWW"],
});
handler.start();

bot.loginBot("YOUR_TOKEN_HERE");