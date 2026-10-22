# .theMeal v12 — cập nhật từ v11

Bộ mã nguồn website HTML/CSS/JavaScript phục vụ trình bày đề tài .theMeal.

## Cập nhật theo 17 yêu cầu

1. Xóa mô tả phụ trong biểu ngữ AI Miu.
2. Xóa chú thích giới hạn 7 sản phẩm ở cuối trang Tủ lạnh.
3. Ngày kiểm tra lại đề xuất hiển thị “sau N ngày”, không kèm câu chú thích cũ.
4. Nút danh sách mua đổi thành **Cập nhật**.
5. Bỏ ghi chú cuối trong hộp hướng dẫn kết nối thiết bị.
6. Cho phép quản trị viên xóa tài khoản người dùng, kể cả Jessica và Taeyeon; không tự xóa tài khoản quản trị Tiffany đang hoạt động. Danh sách xóa được lưu để tài khoản mẫu không hiện trở lại sau khi tải lại.
7. Sửa thông báo hết lượt AI Miu không xuất hiện dấu ngoặc thừa.
8. Bỏ mô tả chung ở tất cả danh mục quản trị.
9. Giao dịch Premium hiển thị là gói dịch vụ .theMeal, không gắn nhãn chuyên gia.
10. Bỏ nhãn ECDSA trên giao diện hợp đồng (giữ thông tin về giới hạn chứng thư xác thực).
11. Bỏ các nhãn thử nghiệm/mô phỏng/demo khỏi phần hiển thị thông thường. Phần giới hạn của các dịch vụ chưa kết nối thật vẫn được thông báo bằng câu rõ nghĩa.
12. Thêm danh mục **Doanh thu thực nhận** trong Quản lý doanh thu. Tính doanh thu học phí đã ghi nhận trừ phí đăng khóa 10% và chiết khấu 2%; tách riêng phí gói Premium của nền tảng.
13. Thêm **Thích**, **Lưu bài viết** trong Cộng đồng; các bài đã lưu hiển thị ở Cài đặt cá nhân theo tài khoản.
14. Đổi tiêu đề cột **Diễn giải** thành **Cách tính**.
15. Chỉnh icon đồng hồ sáng trắng và ảnh đại diện quản trị tông xanh.
16. Ngày trong phần nội dung hiển thị theo DD/MM/YYYY. Giao diện nhập ngày gốc của trình duyệt có thể vẫn theo định dạng vùng thiết bị.
17. Các bài tập đã thêm xuất hiện ngay trong **Kế hoạch của tôi** theo đúng ngày, cho phép đánh dấu hoàn thành/xóa tại đây và tính calories ước tính theo thời gian, loại bài tập, cân nặng (hoặc mốc tham khảo 60 kg khi chưa có cân nặng). Bỏ ô kế hoạch tập luyện trùng lặp khỏi trang Rèn luyện sức khỏe.

## Hạn chế kỹ thuật

Website vẫn lưu dữ liệu trong localStorage trên trình duyệt, không đồng bộ giữa các thiết bị. Chưa kết nối OTP/email thật, ngân hàng, dịch vụ AI trực tuyến, hay dịch vụ ký số với chứng thư pháp lý. Phần thống kê tài chính là số liệu phục vụ bài học, không phải bằng chứng thu/chi thực tế. Ước tính calories không thay thế hướng dẫn chuyên gia y tế.

## Cấu trúc
- `index.html`: màn hình và điều hướng
- `style.css`: thiết kế desktop/mobile
- `app.js`: dữ liệu, tương tác, phân quyền và nghiệp vụ
- `assets/`: favicon và ảnh đại diện SVG
