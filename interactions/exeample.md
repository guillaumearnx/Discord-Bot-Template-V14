# File exeample :

```js
module.exports = {
    config: {
        description: "description",
        category: 'Utils',
        specialPermissions: '',
        name: __filename.slice(__dirname.length + 1, __filename.length - 3),
        forceBotChannel: false, //Si true, commande uniquement faisable dans un channel bot
    },
    options: [
        {type: 1, name: 'user', description: 'Mention user.', required: false},
        {type: 3, name: 'channel', description: 'Mention channel.', required: true}
    ],
    run: async (client, interaction) => {
        //Instructions
    }
}
```

# Options :

| Number      |  Type          |
| :---:       |  :---:         |
| 1           |  User          | 
| 2           |  Role          | 
| 3           |  Channel       | 
| 4           |  String        | 
| 5           |  Integer       | 
| 6           |  Boolean       | 
| 7           |  Mentionable   | 

