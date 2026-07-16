// Never Island Telegram Bot
const TelegramBot = require('node-telegram-bot-api');

const token = '8722187214:AAEZmzwj-UdUeEbfhdIKYc_2pIvpHtG0Hb4';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/create_character/, (msg) => {
  bot.sendMessage(msg.chat.id, '🚀 خوش اومدی به Never Island!\nنام شخصیتت رو وارد کن 😃🔥');
});

bot.onText(/\/profile/, (msg) => {
  bot.sendMessage(msg.chat.id, '👤 پروفایل شخصیتت:\nنام: هنوز ثبت نشده\nسطح: 1\nسکه‌ها: 0 NV');
});

bot.onText(/\/mission/, (msg) => {
  bot.sendMessage(msg.chat.id, '⚔️ مأموریت جدید آماده‌ست!\nبرای شروع مأموریت، دستور /start_mission را بزن.');
});

console.log('Never Island Bot is running...');
