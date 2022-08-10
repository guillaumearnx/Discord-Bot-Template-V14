# Discord-Bot-Template-V14

<div align="center">
<a href="https://discord.garnx.fr">
<img src="https://img.shields.io/discord/840647292864430080.svg?colorB=Blue&logo=discord&label=Support&style=for-the-badge" alt="Support">
</a>
<a href="https://github.com/guillaumearnx/Discord-Bot-Template-V14/issues">
<img src="https://img.shields.io/github/issues/guillaumearnx/Discord-Bot-Template-V14.svg?style=for-the-badge" alt="issues">
</a>
<a href="https://github.com/guillaumearnx/Discord-Bot-Template-V14/pulls">
<img src="https://img.shields.io/github/issues-pr/guillaumearnx/Discord-Bot-Template-V14.svg?style=for-the-badge" alt="pr">
</a>
<br>
</div>

## Informations

Use this template to create a minimal operating environment.

## Requirements
**NodeJS >= 16.9.0**

**NPM >= 7.21.1**

## Run the project

```bash
# Clone the repository
git clone https://github.com/guillaumearnx/Discord-Bot-Template-V14.git

# Enter into the directory
cd Discord-Bot-Template-V14/

# Install the dependencies
npm install
```

:warning: **Important:** Make sure that your bot has the `applications.commands` application scope enabled, which can be found under the `OAuth2` tap on the [developer portal](https://discord.com/developers/applications/)

:memo: Copy the file `config.example.json` into `config.json` and fill it

```bash
node index.js
```

## Pterodactyl Usage

Use [this egg](https://github.com/parkervcp/eggs/blob/master/bots/discord/discord.js/egg-discord-js-generic.json) to work with Pterodactyl.
