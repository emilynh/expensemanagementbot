// Mã token của Telegram bot để xác thực các yêu cầu API
var TELEGRAM_TOKEN = 'TOKEN_CUA_BOT'; 

// ID của Google Sheet nơi dữ liệu chi phí được lưu trữ
var SHEET_ID = 'ID_CUA_GOOGLE_SHEET'; 

// Tên của sheet trong Google Sheet nơi dữ liệu chi phí được lưu trữ
var SHEET_NAME = 'TEN_SHEET'; 

// URL của ứng dụng Web đã triển khai, được sử dụng để thiết lập webhook
var WEBAPP_URL = 'URL_CUA_WEB_APP'; 

// ID người dùng (Telegram chat ID) được ủy quyền để truy cập vào Bot
var USER_ID = 'ID_NGUOI_DUNG'; 

// Timezone 
var TIMEZONE = "Asia/Ho_Chi_Minh";

// Object representing different expense categories and their corresponding subcategories
var categories = { 
  'Ăn uống': ['Ăn tiệm', 'Đi chợ/ siêu thị', 'Cafe'],
  'Dịch vụ sinh hoạt': ['Điện', 'Nước', 'Điện thoại di động', 'Internet'],
  'Di chuyển': ['Gửi xe', 'Rửa xe', 'Sửa chữa, bảo dưỡng', 'Xăng xe', 'Grab'],
  'Tiền nhà': ['Thuê nhà', 'Mua sắm đồ đạc'],
  'Trang phục': ['Quần áo', 'Giày dép', 'Phụ kiện'],
  'Mỹ phẩm': ['Skincare', 'Đồ Makeup', 'Sữa tắm', 'Dầu gội', 'Sữa rửa mặt'],
  'Giải trí': ['Du lịch', 'Phim ảnh ca nhạc', 'Làm đẹp'],
  'Phát triển bản thân': ['Học hành', 'Giao lưu quan hệ'],
  'Sức khoẻ': ['Khám chữa bệnh', 'Thuốc men', 'Thể thao']
};
