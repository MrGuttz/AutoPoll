This is a hard coded discord bot for FFXIV to ask guild members what Free Company actions they would like to have active for the following day.
The message is poll that is sent out automatically every day at 1800 UTC.

To make this work for your discord server you have to create a .env file at the top level folder.
Inside the .env add the following variables:

  TOKEN = is the token generated when you create the discord bot (on the discord developer portal)
  GUILD_ID = the ID of the discord server
  CLIENT_ID = the ID of the discord bot (after joining the server)
  CHANNEL_ID = the ID of the channel (within the server)
