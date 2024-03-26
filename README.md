This is a hard coded discord bot for FFXIV that sends out an automatic poll every day at 1800 UTC.

To make this work for your discord server you have to create a .env file at the top level folder.
Inside the .env add the following variables:

  TOKEN = is the token generated when you create the discord bot (on the discord developer portal)
  GUILD_ID = the ID of the discord server
  CLIENT_ID = the ID of the discord bot (after joining the server)
  CHANNEL_ID = the ID of the channel (within the server)
