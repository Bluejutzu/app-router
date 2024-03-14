const {  EmbedBuilder, hyperlink } = require("discord.js");

const websiteUrl = "https://bluejutzu.vercel.app/";
const link = hyperlink('Dashboard', websiteUrl)

export const suggestionEmbed = new EmbedBuilder()
  .setAuthor({ name: "Suggestion System" })
  .setTitle(`New Suggestion submitted`)
  .setDescription(`From ${link}`)
  .setFields({
    name: "Suggestion:",
    value: "Mock text",
  })
  .setTimestamp();