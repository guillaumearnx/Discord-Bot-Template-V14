const {checkOwner} = require('../utils/functions')
const {CHANNELS} = require("../config.json")

module.exports = async (bot, interaction) => {
    if (interaction.isCommand()) {
        const interactionCommand = bot.interactions.get(interaction.commandName);
        const interactionF = require(`../interactions/${interaction.commandName}`);
        const interactionConfig = interactionF.config;
        if (!interactionCommand || !interactionF) return;
        try {
            if (interactionConfig.specialPermissions.toLowerCase() === 'owner' && !await checkOwner(interaction.user.id)) {
                return interaction.reply({content: 'Vous ne pouvez pas faire ça !', ephemeral: true});
            }
            if (interactionConfig.specialPermissions.toLowerCase() === 'moderator' && !interaction.member.permissions.has('KICK_MEMBERS', true)) {
                return interaction.reply({content: 'Vous ne pouvez pas faire ça !', ephemeral: true});
            }
            if (!interaction.member.permissions.has('ADMINISTRATOR', true)) {
                if (interactionConfig.specialPermissions.toLowerCase() === 'administrator') {
                    return interaction.reply({content: 'Vous ne pouvez pas faire ça !', ephemeral: true});
                }
                if (interactionConfig.forceBotChannel && ([CHANNELS["BOT_COMMANDS"], CHANNELS["BOT_PUBLIC_COMMANDS"]].indexOf(interaction.channel.id) < 0)) {
                    return interaction.reply({content: 'Vous ne pouvez pas faire ça ici !', ephemeral: true});
                }
            }
            await interactionF.run(bot, interaction);
        } catch (error) {
            console.error(error)
            await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
        }
    }

};
