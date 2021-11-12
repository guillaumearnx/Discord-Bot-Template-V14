# File exeample :

```js
module.exports = {
    config: {
        description: "description",
        category: 'Utils',
        specialPermissions: '', //choose between "administrator" or "moderator" or nothing
        name: __filename.slice(__dirname.length + 1, __filename.length - 3),
        forceBotChannel: false, //Si true, commande uniquement faisable dans un channel bot
    },
    options: [
        //Optionnal fields
        {type: 1, name: 'user', description: 'Mention user.', required: false},
        {type: 3, name: 'channel', description: 'Mention channel.', required: true},
        {
            type: 5, name: 'mode', description: 'Application mode.', required: false, choices: [
                ["Fast Mode", 1],
                ["Full Mode", 2]
            ]
        }
    ],
    run: async (client, interaction) => {
        //Main Instructions
    }
}
```

Please note that options for interaction in **run()** method are stored in **interaction.options._hoistedOptions** in an
Array

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

