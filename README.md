# Thao tác với web

## 1. Clone dự án
```sh
git clone git@github.com:saintsl4y3r/intro_monkey5.git
```

## 2. Cài đặt thư viện cần thiết
Sau khi clone về, chạy lệnh sau để cài đặt thư viện:

```sh
npm install
```

## 3. Khởi chạy server
Dùng lệnh sau để chạy server:

```sh
npm run vite:dev
```

## 4. Commit và đẩy code lên Git
Sau khi chỉnh sửa và kiểm tra trên server, thực hiện commit và push code:

```sh
git add .
git commit -m "<nhập nội dung>"
git push
```

## 5. Build lại ảnh trước khi deploy
Trước khi deploy, chạy lệnh sau để build lại ảnh:

```sh
npm run vite:build
```

## 6. Deploy web lên GitHub Pages
Thực hiện deploy bằng lệnh:

```sh
npm run vite:deploy
```

### *Lưu ý:*
- Sau khi deploy, GitHub Pages có thể mất một khoảng thời gian để cập nhật. Nếu trang web chưa thay đổi, nhấn tổ hợp phím `Ctrl + Shift + R` để xóa cache cũ.
- Phải push code lên repo trước khi deploy thì thay đổi mới được cập nhật lên web.
```