const config = require('./../config.json');
const { EmbedBuilder } = require('discord.js');

const utils = {
  colors: {
    success: [ 100, 220, 100 ],
    fail: [ 255, 100, 100 ],
    warning: [ 255, 120, 32 ],
    info: [ 170, 187, 221 ]
  },
  icons: {
    success: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-64.png',
    fail: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678080-shield-error-64.png',
    warning: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678136-shield-warning-64.png',
    info: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678110-sign-info-64.png'
  },
  emojis: {
    success: ':white_check_mark:',
    fail: ':anger:',
    warning: ':warning:',
    info: ':information_source:'
  },
  embeds: {
    success: function (content, title = '') {
      let embed = new EmbedBuilder()
        .setColor(utils.colors.success)
        .setDescription(utils.emojis.success + ' ' + content);
      if (title) embed.setTitle(title);
      return embed;
    },
    fail: function (content, title = '') {
      let embed = new EmbedBuilder()
        .setColor(utils.colors.fail)
        .setDescription(utils.emojis.fail + ' ' + content);
      if (title) embed.setTitle(title);
      return embed;
    },
    warning: function (content, title = '') {
      let embed = new EmbedBuilder()
        .setColor(utils.colors.warning)
        .setDescription(utils.emojis.warning + ' ' + content);
      if (title) embed.setTitle(title);
      return embed;
    },
    info: function (content, title = '') {
      let embed = new EmbedBuilder()
        .setColor(utils.colors.info)
        .setDescription(utils.emojis.info + ' ' + content);
      if (title) embed.setTitle(title);
      return embed;
    }
  },
  config: config,
  toTitleCase: function (str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  },
};

module.exports = utils;
