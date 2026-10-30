# 💀 HARDCORE SLAM // BRUTALIST PORTFOLIO & ARCHIVE

> Portfolio cá nhân kết hợp kho lưu trữ underground music fanzine, mang phong cách thô ráp, tương phản cao (High Contrast Brutalism / Death Metal / Photocopy Zine) được tối ưu hóa hiệu năng bằng **Astro**, **TypeScript**, **CSS thuần** và triển khai tự động lên **GitHub Pages**.

---

## 1. Công nghệ sử dụng

- **Framework:** [Astro v7+](https://astro.build/) (Static Site Generation - SSG, 100/100 Lighthouse performance).
- **Ngôn ngữ:** TypeScript.
- **Styling:** CSS variables thuần, typography tối ưu (`Bebas Neue`, `Space Grotesk`, `JetBrains Mono`), không phụ thuộc thư viện CSS nặng nề.
- **Quản lý nội dung:** Astro Content Layer Collections với validation schema (`zod`).
- **Hiệu ứng & Chuyển động:** CSS keyframes, `IntersectionObserver` reveal nhẹ, reading progress bar, hỗ trợ triệt để `prefers-reduced-motion: reduce`.
- **Triển khai:** GitHub Actions (`.github/workflows/deploy.yml`) xuất bản tự động lên GitHub Pages.

---

## 2. Yêu cầu môi trường & Cài đặt

Yêu cầu máy tính đã cài đặt **Node.js** (khuyến nghị phiên bản LTS từ v20 trở lên).

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển cục bộ (Local Dev Server)
npm run dev
# Mở trình duyệt tại: http://localhost:4321
```

---

## 3. Các lệnh chính (Scripts)

| Lệnh | Ý nghĩa |
| :--- | :--- |
| `npm run dev` | Khởi chạy môi trường phát triển (hiển thị cả bài viết draft). |
| `npm run build` | Biên dịch toàn bộ website thành file tĩnh tại thư mục `dist/` (tự động loại bỏ bài draft). |
| `npm run preview` | Chạy thử bản build tĩnh `dist/` ngay tại máy cục bộ. |

---

## 4. Danh sách các trang đã hoàn thiện

- **Trang chủ (`/`):** Hero typography khổng lồ, status strip độc lập, danh mục tác phẩm tiêu biểu (Featured Works), 3 bài viết Markdown mới nhất, và tuyên ngôn sáng tạo.
- **Giới thiệu (`/about/`):** Tiểu sử cá nhân, ma trận kỹ năng (Discipline Matrix), quy trình làm việc (Creative Protocol), dòng thời gian sự kiện (Milestones) và thông tin liên hệ nhanh.
- **Tác phẩm / Commissions (`/projects/`):** Grid card tác phẩm, bộ lọc tức thì theo công cụ/chuyên môn (Discipline Filter) phía client-side không cần tải lại trang.
- **Chi tiết tác phẩm (`/projects/[slug]/`):** Case study chi tiết, vai trò, công cụ, đường dẫn demo bên ngoài / repository, điều hướng Next/Previous.
- **Bài viết / Lưu trữ (`/posts/`):** Danh sách bài viết Markdown với thanh tìm kiếm trực tiếp (Instant Search) theo tiêu đề/nội dung và bộ lọc tag.
- **Chi tiết bài viết (`/posts/[slug]/`):** Đọc nội dung Markdown chuẩn, thanh đo tiến độ đọc mảnh ở đầu trang (Scroll Progress), thời gian đọc tự tính, bài viết liên quan theo tag, và điều hướng bài trước/sau.
- **Trang thẻ (`/tags/[tag]/`):** Phân loại và tổng hợp toàn bộ bài viết theo tag.
- **Liên hệ (`/contact/`):** Kênh truyền tin trực tiếp, nút tiện ích Copy Email to Clipboard tức thì, liên kết mạng xã hội (GitHub, Bandcamp, Instagram) và hướng dẫn gửi yêu cầu hợp tác.
- **Trang lỗi 404 (`/404.html`):** Thiết kế lỗi "Signal Lost // Track Not Found" chuẩn phong cách brutalist có nút quay về Home và Posts.

---

## 5. Hướng dẫn quản lý nội dung

### 5.1 Thêm hoặc chỉnh sửa bài viết Markdown

Mỗi bài viết được lưu dưới dạng file `.md` tại thư mục `src/content/posts/`.

Ví dụ: tạo file `src/content/posts/ten-bai-viet-moi.md`:

```markdown
---
title: "Tiêu đề bài viết của bạn"
description: "Mô tả ngắn gọn về bài viết để hiển thị trong card và thẻ meta SEO."
pubDate: 2026-10-30
updatedDate: 2026-10-31
tags:
  - typography
  - hardcore
  - audio
draft: false
---

## Tiêu đề phần 1

Nội dung bài viết viết bằng cú pháp Markdown bình thường...
```

#### Quy tắc Draft / Publish:
- `draft: true`: Bài viết chỉ xuất hiện khi chạy `npm run dev`. Khi chạy `npm run build` cho môi trường production, bài viết này sẽ **tự động bị loại bỏ hoàn toàn** khỏi bản build.
- `draft: false` (hoặc bỏ trường `draft`): Bài viết sẽ được xuất bản công khai lên website.

### 5.2 Thêm dự án vào Portfolio

Mỗi dự án được lưu tại thư mục `src/content/projects/`.

Ví dụ: tạo file `src/content/projects/du-an-moi.md`:

```markdown
---
title: "Tên dự án hoặc album artwork"
description: "Mô tả ngắn về sản phẩm bàn giao."
year: "2026"
role: "Art Direction & Screenprint"
tools:
  - Photoshop
  - Screenprinting
  - Typography
featured: true
order: 1
link: "https://example.com/demo"
repo: "https://github.com/example/repo"
---

## Bối cảnh và Thách thức
Nội dung case study chi tiết...
```

---

## 6. Danh sách Placeholder cần thay đổi trước khi đưa vào hoạt động chính thức

Để website trở thành portfolio mang đậm dấu ấn cá nhân của bạn, hãy cập nhật các thông tin placeholder sau:

1. **Tên và Nghệ danh:**
   - Trong `src/pages/index.astro`: Thay đổi `MAY-39 [YOUR NAME / ARTIST NAME]`.
   - Trong `src/pages/about.astro`: Cập nhật tiểu sử và tên nghệ sĩ.
   - Trong `src/components/SiteHeader.astro`: Chỉnh sửa logo chữ `SLAM // ARCHIVE` nếu muốn dùng tên riêng.
2. **Tagline & Bio:** Cập nhật đoạn giới thiệu ngắn tại `src/pages/index.astro` và `src/pages/about.astro`.
3. **Kỹ năng & Mốc thời gian:** Cập nhật mảng `skills` và `timeline` trong file `src/pages/about.astro`.
4. **Email liên hệ:** 
   - Thay `contact@example.com` trong `src/pages/contact.astro` và `src/components/SiteFooter.astro`.
5. **Mạng xã hội:** Cập nhật link GitHub, Bandcamp, Instagram tại `src/pages/contact.astro` và `src/components/SiteFooter.astro`.

---

## 7. Hướng dẫn triển khai lên GitHub Pages

Website được thiết lập để tự động tương thích với cả:
- **Project Site:** `https://USERNAME.github.io/REPOSITORY_NAME/`
- **User Site:** `https://USERNAME.github.io/`

### Các bước kích hoạt trên GitHub:

1. Đẩy mã nguồn dự án lên repository trên GitHub của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: complete hardcore slam portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
   git push -u origin main
   ```

2. Truy cập vào kho chứa trên GitHub:
   - Vào **Settings** ➔ chọn mục **Pages** (ở thanh menu bên trái).
   - Tại mục **Build and deployment** ➔ **Source**, đổi từ *Deploy from a branch* thành **GitHub Actions**.

3. Ngay khi bạn chọn **GitHub Actions**, workflow `.github/workflows/deploy.yml` đã chuẩn bị sẵn sẽ tự động kích hoạt:
   - Tự nhận diện base path của repository.
   - Biên dịch tĩnh toàn bộ nội dung.
   - Đưa website lên internet sau khoảng 1-2 phút!

---

## 8. Xử lý đường dẫn và tài nguyên tĩnh (Asset Path Safety)

- Dự án sử dụng hàm tiện ích `resolvePath(path)` trong `src/utils/path.ts` và biến môi trường `BASE_PATH` của Astro.
- Khi triển khai lên một repository có tên dạng `https://USERNAME.github.io/alaba/`, mọi liên kết nội bộ, file CSS, favicon, ảnh tĩnh đều tự động được gắn tiền tố `/alaba/`, đảm bảo không bao giờ bị lỗi 404 hình ảnh hay mất định dạng style.
