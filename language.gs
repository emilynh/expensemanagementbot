var LANGUAGE = PropertiesService.getScriptProperties().getProperty('LANGUAGE') || 'vietnamese';
var translations = {

  'vietnamese': {
    'name': '🇻🇳 Tiếng Việt',

    /* Inline keyboard actions */
    'inline_choose_category': 'Chọn một danh mục:',
    'inline_choose_section': 'Chọn phân loại:',
    'inline_enter_price': 'Nhập ghi chú và chi tiêu:',
    'inline_expense_saved': 'Chi tiêu đã được lưu! ✔️\n\nDanh mục: {category}\nPhần: {section}\nGiá: {price} VND',
    'inline_choose_expense':'Chọn chi tiêu để xóa:',
    'inline_expense_deleted': 'Chi tiêu đã được xóa! ✔️\n\nDanh mục: {category}\nPhần: {section}\nGiá: {price} VND',
    'inline_global_expenses': 'Tổng chi phí: {globalExpenses} VND',
    'inline_most_frequent_category': 'Danh mục phổ biến nhất:',
    'inline_most_frequent_section': 'Phần phổ biến nhất:',
    'inline_occurrences': 'lần',

    /* Custom keyboard */
    'customkey_add_expense': 'Thêm khoản chi',
    'customkey_delete_expense': 'Xóa khoản chi',
    'customkey_show_summary': 'Xem báo cáo',

    /* Misc */
    'error_not_authorized':'⛔ Bạn không được phép! ⛔',
    'error_invalid_characters':'❌ Lỗi: giá trị đã nhập ({message.text}) chứa ký tự không hợp lệ! ❌',
    'error_command_not_recognized': '❌ Lỗi: lệnh ({message.text}) không được nhận dạng! ❌',
    'error_post_request':'❌ Lỗi xử lý yêu cầu: {error.message} ❌',
    'error_unknown_callback':'❌ Loại gọi lại không xác định ❌',
    'error_unable_find_expense': '❌ Lỗi: Không thể tìm thấy chi tiêu đã chọn ❌',
    'error_showing_summary':'❌ Lỗi hiển thị tóm tắt chi tiêu: {error.message} ❌',

    /* Bot commands*/
    'command_language': '🌍 Sử dụng các nút dưới đây để thay đổi ngôn ngữ của bot:',
    'command_canceled': '👍 Đã hủy. Nếu bạn gặp vấn đề, hãy nhập /help.',
    'command_show_help':' ⚙️ Lệnh\n\n • /start: hiển thị thông báo chào mừng \n • /help: mở thông báo này và nhận trợ giúp \n • /cancel: hủy lệnh hiện tại \n • /language: thay đổi ngôn ngữ của bot \n\n 👤 Liên hệ \n\n • gmail: vuongthidiemquynh_t66@hus.edu.vn ',
    'command_show_welcome':'👋 Xin chào, tôi là Chatbot Sổ chi tiêu cá nhân và tôi có thể giúp bạn theo dõi các khoản chi tiêu một cách tiện lợi!',
    'command_show_welcome_detailed':'✅ Những điều bạn cần biết\n\n 1️⃣ Chỉ có bạn mới có thể tương tác với bot của mình, nhờ xác thực dựa trên ID telegram\n\n 2️⃣ Bạn có thể thêm các khoản chi tiêu hàng ngày thông qua các danh mục và phân loại chi tiêu\n\n 3️⃣ Bạn có thể tùy chỉnh hoàn toàn các danh mục và phân loại chi tiêu\n\n 4️⃣ Bạn có thể xóa một trong 5 chi tiêu gần nhất đã nhập\n\n 5️⃣ Bạn có thể kiểm tra các khoản chi tiêu bao nhiêu kể từ đầu năm, theo tháng và theo danh mục \n\n Lưu ý: nếu bạn cần trợ giúp, hãy nhập /help!',
  },


  

  'english': {
    'name': '🇬🇧 English',

    /* Inline keyboard actions */
    'inline_choose_category': 'Choose a category:',
    'inline_choose_section': 'Choose a section:',
    'inline_enter_price': 'Enter the price:',
    'inline_expense_saved': 'Expense saved! ✔️\n\nCategory: {category}\nSection: {section}\nPrice: {price} €',
    'inline_choose_expense':'Choose the expense to be eliminated:',
    'inline_expense_deleted': 'Expense deleted! ✔️\n\nCategory: {category}\nSection: {section}\nPrice: {price} €',
    'inline_global_expenses': 'Global expenses: {globalExpenses} €',
    'inline_most_frequent_category': 'Most frequent category:',
    'inline_most_frequent_section': 'Most frequent section:',
    'inline_occurrences': 'occurrences',

    /* Custom keyboard */
    'customkey_add_expense': 'Add expense',
    'customkey_delete_expense': 'Delete expense',
    'customkey_show_summary': 'Summary',

    /* Misc */
    'error_not_authorized':'⛔ You\'re not authorized! ⛔',
    'error_invalid_characters':'❌ Error: the value entered ({message.text}) contains invalid characters! ❌',
    'error_command_not_recognized': '❌ Error: command ({message.text}) not recognized! ❌',
    'error_post_request':'❌ Error handling request: {error.message} ❌',
    'error_unknown_callback':'❌ Unknown callback type ❌',
    'error_unable_find_expense': '❌ Error: Unable to find the selected expense ❌',
    'error_showing_summary':'❌ Error showing expense summary: {error.message} ❌',

    /* Bot commands*/
    'command_language': '🌍 Use the buttons down here to change the bot\'s language:',
    'command_canceled': '👍 Cancelled. If you have problems, consult the /help page.',
    'command_show_help':' ⚙️ Commands\n\n • /start: show the welcome message \n • /help: open this message and get help \n • /cancel: cancel the current command \n • /language: change the bot\'s language \n\n 👤 Contact \n\n • @sickmz',
    'command_show_welcome':'👋 Hi, I\'m Twallet and I can help you keeping track of your expenses!',
    'command_show_welcome_detailed':'✅ What you need to know\n\n 1️⃣ Only you can interact with your bot, thanks to telegram ID-based authentication\n\n 2️⃣ You can add everyday expenses through categories and sections with convenient inline keyboardsn\n\n 3️⃣ You can fully customize categories and sections\n\n 4️⃣ You can delete one of the last 5 expenses entered\n\n 5️⃣ You can check how much you\'ve spent since the beginning of the year, both by month and by category \n\n Remember: if you need help type /help!',
  }
};

function showLanguageOptions(chatId) {
  var language = translations[LANGUAGE];
  var inlineKeyboard = [
    [
      { text: (LANGUAGE === 'vietnamese' ? '✅ 🇻🇳 vie' : '🇻🇳 vie'), callback_data: 'language_vietnamese'},
      { text: (LANGUAGE === 'english' ? '✅ 🇬🇧 en' : '🇬🇧 en'), callback_data: 'language_english'}
    ],
    
  ];

  var options = {reply_markup: JSON.stringify({inline_keyboard: inlineKeyboard})};
  sendTelegramMessage(chatId, language['command_language'], options);
}

function setLanguage(chatId, language) {
  LANGUAGE = language;
  PropertiesService.getScriptProperties().setProperty('LANGUAGE', language);
  var message = '✅ Language set to: ' + translations[language].name;

  showMainMenu(chatId, message);
}