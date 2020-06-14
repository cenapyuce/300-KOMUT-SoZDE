const Discord = require('discord.js');


exports.run = function(client, message) {


};

exports.conf = {
  enabled: true, //komut açık kapalı
  guildOnly: false, //herkese kullanır
  aliases: ['1', '2'], //komutun farklı kullanımları
  permLevel: 0 //kimler kullancağını belirtir 
};

exports.help = {
  name: 'komutadı', //adını belirtin (kullanmak için gereken komut) Örneğin otorol
  description: 'komutaçıklaması', //komutun açıklaması
  usage: 'kullanımı' //komutun kullanım şekli (örneğin x!otorol <@rol> <#kanal>)
};




//Bu komut taslağı Seinroth#8230 tarafından yazılmıştır.//