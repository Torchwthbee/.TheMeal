# Hướng dẫn cập nhật .theMeal v12 lên GitHub Pages

1. Sao lưu mã nguồn hiện có trong repository `8.TheMeal` trước khi thay đổi.
2. Tải bản ZIP **3-file**, giải nén, mở repository GitHub: `https://github.com/huynguyentrong1710-maker/8.TheMeal`.
3. Trên tab Code, chọn **Add file → Upload files**, kéo lên ba file `index.html`, `style.css`, `app.js` (cho phép ghi đè file trùng tên ở thư mục gốc).
4. Nhấn **Commit changes**. Nếu có thông báo xử lý trùng tên, kiểm tra file mới trước khi lưu.
5. Giữ nguyên thư mục `assets` đang có trong repository. Bản v12 sử dụng các ảnh mặc định đã tồn tại từ v11.
6. Trong **Settings → Pages**, giữ nguồn triển khai `Deploy from a branch`, nhánh `main`, thư mục `/(root)`.
7. Mở địa chỉ GitHub Pages, dùng Ctrl+F5 hoặc làm mới mạnh để cập nhật CSS/JS.
8. Đăng nhập thử tài khoản demo: `Jessica / 1234`, `Taeyeon / 1234`, `Tiffany / 1234`.

**Quan trọng:** Bản cập nhật dùng cùng khóa lưu trữ như v11 để giữ dữ liệu cũ. Xóa localStorage hoặc chọn khôi phục dữ liệu sẽ làm mất dữ liệu đã nhập trên thiết bị. Hãy sao lưu trước khi thử các thao tác xóa tài khoản hoặc xóa công thức.

Đây là website HTML chạy tĩnh. Chat giữa các máy, ngân hàng, xác thực và ký số thật cần backend tương ứng.
