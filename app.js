"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://db/telebot-money');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected!');
});
const TeleBot = require('telebot');
const bot = new TeleBot('374313292:AAH8HU2esxr1fF0oJl6bsQSJudUkPYk3zK8');
bot.on('text', msg => {
    let fromId = msg.from.id;
let firstName = msg.from.first_name;
let reply = msg.message_id;
return bot.sendMessage(fromId, `Welcome, ${ firstName }!`, { reply });
});

bot.connect();
