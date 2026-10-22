# Kiểm thử .theMeal v11

- PASS: cú pháp JavaScript qua `node --check`.
- PASS: đăng nhập Tiffany, mở các mục quản trị; mục con không có bốn thẻ tổng quan.
- PASS: quản lý công thức, thêm công thức và lưu trong state.
- PASS: đăng ký email mới, OTP bất kỳ và hai mật khẩu trùng khớp; chuyển đến thiết lập sức khỏe, người mới có 0 thực phẩm.
- PASS: Jessica gửi CSKH -> quản trị viên trả lời -> Jessica đọc phản hồi.
- PASS: Jessica ký hợp đồng học viên -> Taeyeon ký -> quản trị viên ký -> trạng thái hoàn tất -> có giao dịch.
- PASS: chiều rộng màn hình 390px trong luồng CSKH không tràn ngang; không ghi nhận lỗi JavaScript ở các luồng trên.
- CHƯA KIỂM THỬ: thiết bị Bluetooth thực, SMS/Google OAuth thật, ký số CA, thanh toán hoặc lưu/đồng bộ giữa các thiết bị.
- Mọi thử nghiệm giao diện là Chromium tự động chạy nội dung nguồn được nạp vào trang; chưa kiểm tra trên điện thoại vật lý.
