module.exports.run = async (bot, message, args) => {
    //Main instructions
};

module.exports.config = {
    category: '',
    specialPermissions: 'Choose between administrator or moderator',
    name: __filename.slice(__dirname.length + 1, __filename.length - 3),
    aliases: [''],
    forceBotChannel: false, //Set to true if you want that command can only be executed in the config channel
};

module.exports.help = {
    description: '',
    syntax: ``,
    examples: ``,
};
