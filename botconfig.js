module.exports = {
  Admins: ["763224662678306863", "UserID"], //Admins of the bot
  ExpressServer: false, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "$", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/WXtQWZTSrr", //Support Server Link
  Token: "OTA1MTE3MjI3MDY0MzczMjY4.YYFaGw.nG4qm1UmUTfTxfuiJeqWrHm2ohM", //Discord Bot Token
  ClientID: "905117227064373268", //Discord Client ID
  ClientSecret: "Ska-bQ_wKZ28_x7V2ZaYgmad44RpmZEs", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "NM10 is very epic", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "#58b9ff", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "$help", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Priv lavalink",
    host: "lavalink-repl.nm10ispog.repl.co",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "NM10",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "5a8de913aa0048799ac93e6997c140d8", //Spotify Client ID
    ClientSecret: "603c9e372f6a49e6b38c882879ae029b", //Spotify Client Secret
  },
};
