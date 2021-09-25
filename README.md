# revolthandler.js

## Description

Easy command handling for revolt.js

## Table of contents

- [About](#about)
- [Installation](#install)
- [Example Usage](#example)
  - [Setup](#setup)
  - [Standart](#standart-using-example)
  - [Aliases](#aliases-example)
  - [Only owner command](#only-owner-command-example)
  - [Only guild command](#only-guild-command-example)

## About

command handler for revolt.js bot project

## Install

> npm i revolthandler.js

## Example

### Setup

```js
const revolt = require("revolt.js");
const client = new revolt.Client();
const revoltHandler = require("revolthandler.js");
const handler = new revoltHandler.Handler({
  client: client, //required
  prefix: "!", //required
  folder: "./commands", //required
  owners: ["Your ID"], //required , optional add more owner Id
});

handler.start();
client.loginBot("YOUR_TOKEN_HERE");
```

### Standart using example

```js
//"./commands/general/ping.js"
module.exports = {
  name: "ping",
  description: "Ping!", //description :P
  //Be careful
  code(message, args, client) {
    //Your code here
    message.channel.sendMessage("Pong");
  },
};
```

### Aliases example

```js
//"./commands/general/ping.js"
module.exports = {
  name: "ping",
  aliases: ["delay"],
  description: "Ping!", //description :P
  //Be careful
  code(message, args, client) {
    //Your code here
    message.channel.sendMessage("Pong");
  },
};
```

### Only owner command example

```js
//"./commands/owner/test.js"
module.exports = {
  name: "test",
  aliases: ["eval"],
  ownerOnly: {
    status: true,
    errorMsg: "You don't use this command",
    deletable: 3000 /*If you want */,
  },
  code(message, args, client) {
    message.reply("pong");
  },
};
```

### Only guild command example

```js
//"./commands/owner/servericon.js"
module.exports = {
  name: "server-icon",
  aliases: ["server-pfp"],
  ownerOnly: {
    status: true,
    errorMsg: "You don't use this command",
    deletable: 3000 /*If you want */,
  },
  code(message, args, client) {
    msg.channel.sendMessage("https://autumn.revolt.chat/icons/"+client.servers.get(msg.channel.server_id).icon._id)
  },
};
```

# Keys
- {user.name}
- {user.id}
- {command.name}

```You can use in errorMsg```

- [Come to my server](https://rvlt.gg/zrmFWtJz)

# Will add new features in the future# revolthandler.js
