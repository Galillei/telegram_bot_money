"use strict";
var mongoose = require('mongoose');
var config = require('config/config');
mongoose.connect(config.mongoUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected!');
});
const TeleBot = require('telebot');
const bot = new TeleBot(config.secretKeyTelegramm);
bot.on('text', msg => {
    let fromId = msg.from.id;
let firstName = msg.from.first_name;
let reply = msg.message_id;
return bot.sendMessage(fromId, `Welcome, ${ firstName }!`, { reply });
});

bot.connect();
