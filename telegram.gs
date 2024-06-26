// Set up the webhook for the Telegram bot
function setWebhook() {
  try {
    var url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/setWebhook?url=${WEBAPP_URL}`;
    var response = UrlFetchApp.fetch(url);
  } catch (error) {
    Logger.log('Error setting up webhook: ' + error.message);
  }
}

// Send a message to a Telegram chat
function sendTelegramMessage(chatId, text, options) {
  try {
    options = options || {};
    options.chat_id = chatId;
    options.text = text;

    var url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    var payload = JSON.stringify(options);
    var params = {
      method: 'post',
      contentType: 'application/json',
      payload: payload
    };

    UrlFetchApp.fetch(url, params);
  } catch (error) {
    Logger.log('Error sending Telegram message: ' + error.message);
  }
}

// Delete a message from Telegram chat
 function deleteMessage(chatId, messageId) {
  try {
   var data = {
     method: "post",
     payload: {
       method: "deleteMessage",
       chat_id: String(chatId),
       message_id: String(messageId)
     }
   };

   UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/', data);
  } catch (error) {
    Logger.log('Error deleting Telegram message: ' + error.message);
  }
}