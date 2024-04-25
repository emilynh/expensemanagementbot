# Expense Management Bot

## Tính năng

1. **Cấu hình Ban đầu:**
   - Khởi tạo các biến trong `parameters.gs` như mã thông báo bot Telegram, ID Google Sheets, URL WebApp, và các cài đặt khác. Bạn cũng cần phải cấu hình đối tượng `categories` chứa các danh mục và phần chi phí.

2. **Xử lý yêu cầu POST:**
   - Hàm `doPost` được gọi khi bot nhận một yêu cầu POST từ Telegram. Hàm này phân tích nội dung của yêu cầu và gửi yêu cầu đến trình xử lý phù hợp dựa trên loại hành động (callback hoặc tin nhắn).

3. **Quản lý hành động callback:**
   - Hàm `handleCallback` xử lý các hành động liên quan đến các nút trên bàn phím trên Telegram (gọi là callbacks). Tùy thuộc vào loại callback, mã thực hiện các hành động như xóa một chi phí, chọn một danh mục hoặc phần.

4. **Xử lý tin nhắn:**
   - Hàm `handleMessage` xử lý tin nhắn được gửi bởi người dùng tới bot. Tùy thuộc vào nội dung của tin nhắn, bot hiển thị một tin nhắn chào mừng, liệt kê các lệnh có sẵn, bắt đầu quá trình thêm hoặc xóa một chi phí, hoặc xử lý việc nhập giá của một chi phí.

5. **Thêm một chi phí:**
   - Khi chọn nút để thêm một chi phí, bot hiển thị các danh mục có sẵn. Người dùng sau đó chọn một danh mục và sau đó là một phần. Cuối cùng, bot yêu cầu người dùng nhập giá của chi phí và lưu nó trong bảng tính.

6. **Xóa một chi phí:**
   - Khi chọn nút để xóa một chi phí, bot hiển thị 5 chi phí cuối cùng được nhập và cho phép người dùng chọn một chi phí để xóa. Sau khi được chọn, bot xóa chi phí đó khỏi bảng tính.

7. **Tóm tắt chi phí:**
   - Bot cung cấp một tóm tắt về chi phí theo danh mục và theo tháng, hiển thị tổng số tiền của từng danh mục và cho từng tháng (cũng như tần suất lớn nhất của các danh mục và phần).

8. **Thiết lập ngôn ngữ:**
   - Hỗ trợ đa ngôn ngữ và có thể thay đổi ngôn ngữ của bot. Nếu bạn không tìm thấy ngôn ngữ của mình và muốn đóng góp, hãy mở một yêu cầu kéo.

9. **Truy cập an toàn thông qua kiểm soát ID:**
   - Bot được thiết kế để chỉ cho phép một người dùng cụ thể tương tác với nó, dựa trên ID người dùng được cung cấp bởi Telegram và cấu hình trong `parameters.gs`.


## Cài đặt

### 1. Tạo một Google Sheet và sao chép ID của Trang tính

- Đi đến Google Drive và tạo một Trang tính Google mới.
- Sao chép ID duy nhất từ URL của trang tính. ID là một chuỗi dài các chữ cái và số sau `/spreadsheets/d/`.

### 2. Tạo một bot Telegram và lấy mã thông báo và ID người dùng Telegram của bạn

- Mở Telegram và tìm kiếm bot @BotFather.
- Bắt đầu cuộc trò chuyện với @BotFather và sử dụng lệnh `/newbot` để tạo một bot mới.
- Làm theo hướng dẫn và lấy mã thông báo bot được tạo ra.
- Đi đến Bot getUserInfo và lấy ID người dùng Telegram của bạn.

### 3. Thêm tất cả các tệp .gs trong kho lưu trữ này vào Apps Script

- Mở Bảng tính Google được tạo trong bước 1.
- Đi đến "Extensions" trong menu và chọn "Apps Script".
- Nhập tất cả các tập lệnh từ kho lưu trữ này vào Apps Script.

### 4. Triển khai App Script như một Ứng dụng Web

- Nhấp vào menu "Deploy" trong trình soạn thảo Apps Script và chọn "Deploy as web app".
- Chọn "Web application" làm loại triển khai.
- Cung cấp mô tả (ví dụ, "WebAppDeploy") theo ý thích của bạn.
- Đặt "Thực thi dưới dạng" là "Me".
- Dưới "Ai có quyền truy cập vào ứng dụng", chọn "Anyone, even anonymous".
- Nhấp vào "Deploy" để triển khai ứng dụng web.
- Một hộp thoại sẽ yêu cầu bạn xem lại các quyền cần thiết bởi ứng dụng. Nhấp vào "Authorize access" để tiếp tục.

### 5. Lưu URL của Ứng dụng Web được tạo ra

- Sau khi ủy quyền, bạn sẽ nhận được một URL Ứng dụng Web. Lưu URL này để sử dụng sau này.

### 6. Tùy chỉnh App Script

- Mở tệp `parameters.gs` trong trình soạn thảo Apps Script.
- Chèn vào các biến `TELEGRAM_TOKEN`, `SHEET_ID`, `SHEET_NAME`, `USER_ID` và `WEBAPP_URL` các mã thông báo/ID đã lưu trong các bước trước. Nếu cần, chỉnh sửa múi giờ (`TIMEZONE`).

### 7. Tùy chỉnh các danh mục và phần

- Cập nhật đối tượng `categories` trong tệp `parameters.gs` để tùy chỉnh các danh mục và phần theo sở thích của bạn.

### 8. Cập nhật Triển khai App Script

- Trong trình soạn thảo Apps Script, đi đến menu "Deploy" và chọn "Manage deployments."
- Nhấp vào biểu tượng chỉnh sửa (bút) bên cạnh triển khai "WebAppDeploy".
- Nhấp vào "Phiên bản" và sau đó "Phiên bản mới" để tạo một phiên bản mới của triển khai.

## 9. Thực hiện các chức năng setWebhook

- Trong trình soạn thảo Apps Script, nhấp vào menu "Run" và chọn "Run function" -> `setWebhook`.
- Chức năng này sẽ thiết lập webhook cho bot của bạn, cho phép nó nhận các cập nhật từ Telegram.
