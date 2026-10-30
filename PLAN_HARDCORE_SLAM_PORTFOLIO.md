# KẾ HOẠCH XÂY DỰNG PORTFOLIO HARDCORE SLAM TRÊN GITHUB PAGES

> Tài liệu dành cho AI Coding Agent. Hãy đọc toàn bộ file trước khi triển khai.  
> Mục tiêu: tạo một portfolio cá nhân có chất hardcore slam/death metal, chuyển động mượt, nội dung dễ cập nhật bằng Markdown và triển khai miễn phí trên GitHub Pages.

---

## 1. Tầm nhìn sản phẩm

Xây dựng portfolio cá nhân như một **zine/underground music archive** kết hợp portfolio nghệ thuật và blog. Giao diện có cá tính mạnh, tối, thô ráp, tương phản cao; cảm giác như artwork của một album slam/death metal nhưng vẫn dễ đọc, điều hướng rõ ràng và tải nhanh.

### Nguyên tắc thiết kế

- **Mood:** hardcore slam, brutal death metal, underground flyer, photocopy zine, distressed print, industrial.
- **Màu sắc:** nền đen than `#0A0A0A`; trắng ngà `#E8E4DC`; đỏ máu `#D71920`; xám bê tông `#77736D`.
- **Typography:** font display cực đậm/condensed cho tiêu đề; font sans-serif dễ đọc cho nội dung; font monospace cho metadata, ngày tháng, tag.
- **Texture:** noise/grain, halftone, vết xước, đường kẻ và khung kiểu flyer. Dùng CSS/SVG nhẹ; không phủ texture lên khiến chữ khó đọc.
- **Chuyển động:** có chủ đích, đồng bộ, ưu tiên mượt và không gây chóng mặt.
- **Responsive:** ưu tiên desktop nhưng phải dùng tốt trên điện thoại.
- **Accessibility:** tương phản đủ, điều hướng bàn phím, focus rõ, hỗ trợ `prefers-reduced-motion`.
- **Không dùng:** hiệu ứng nặng liên tục, autoplay audio/video, con trỏ giả làm hỏng thao tác mobile, animation khiến nội dung khó đọc.

### Cảm giác hình ảnh mong muốn

Một website giống trang giới thiệu ban nhạc/artist underground: hero typography cực lớn, chữ xếp lớp, đường viền thô, nhãn kiểu catalog, số thứ tự, sticker/tag, ảnh artwork có crop táo bạo và các đường chia mục rõ ràng.

---

## 2. Mục tiêu và phạm vi

### Mục tiêu bắt buộc

1. Có các trang **Home, About, Posts**.
2. Có thể bổ sung **Projects/Works, Archive, Contact**.
3. Bài viết được viết bằng file Markdown, không cần CMS hay cơ sở dữ liệu.
4. Tự động tạo danh sách bài viết, trang chi tiết bài, tag và metadata.
5. Có tìm kiếm hoặc lọc bài viết cơ bản.
6. Triển khai được trên GitHub Pages bằng GitHub Actions.
7. Có hiệu ứng chuyển động mượt, nhưng vẫn tối ưu hiệu năng.
8. Có README hướng dẫn sửa nội dung, thêm bài và deploy.

### Ngoài phạm vi bản đầu

- Không cần đăng nhập, database hoặc backend.
- Không cần bình luận trực tuyến.
- Không cần CMS trả phí.
- Không yêu cầu hiệu ứng 3D/WebGL nặng.
- Không sao chép artwork/logo của ban nhạc khác; dùng typography, texture và hình ảnh có quyền sử dụng.

---

## 3. Công nghệ đề xuất

Ưu tiên **Astro + TypeScript + CSS** vì phù hợp website nội dung tĩnh, Markdown/MDX và GitHub Pages.

- **Framework:** Astro bản ổn định mới nhất tương thích với môi trường.
- **Ngôn ngữ:** TypeScript.
- **Styling:** CSS thuần, CSS variables; không cần framework CSS nặng.
- **Nội dung:** Astro Content Collections với Markdown.
- **Animation:** CSS transitions/keyframes; có thể dùng thư viện animation nhỏ nếu thực sự cần. Không thêm thư viện lớn chỉ để tạo vài hiệu ứng.
- **Icon:** SVG inline hoặc bộ icon nhẹ.
- **Triển khai:** GitHub Actions build Astro và publish thư mục `dist`.
- **Package manager:** npm.
- **Node.js:** phiên bản LTS được Astro hiện tại hỗ trợ; pin phiên bản trong workflow/README.

Agent cần kiểm tra tài liệu Astro và GitHub Pages hiện hành trước khi chọn cấu hình cụ thể. Không dùng các lệnh hoặc API đã lỗi thời.

### Lưu ý đường dẫn GitHub Pages

Cấu hình phải chạy được ở cả hai trường hợp:

1. **Project site:** `https://USERNAME.github.io/REPOSITORY/`
2. **User/organization site:** `https://USERNAME.github.io/`

Không hard-code đường dẫn `/` vào asset, ảnh hoặc liên kết nội bộ. Cấu hình `site` và `base` phù hợp repository. Kiểm tra đường dẫn ảnh, CSS, JS, canonical URL và điều hướng sau khi build.

---

## 4. Kiến trúc trang

### 4.1 Home — `/`

Mục đích: tạo ấn tượng mạnh ngay khi mở trang.

Các khu vực:

1. **Intro/Preloader (tùy chọn):** cực ngắn, không chặn người dùng; có thể bỏ nếu làm chậm cảm nhận tải trang.
2. **Header:** logo/wordmark cá nhân, menu, chỉ báo trạng thái như `INDEPENDENT / AVAILABLE FOR WORK`.
3. **Hero:**
   - Tên hoặc nghệ danh cực lớn.
   - Một câu tagline ngắn, cá tính.
   - Nút `EXPLORE WORK`, `READ THE ARCHIVE`.
   - Họa tiết distressed/halftone.
   - Chỉ báo cuộn xuống.
4. **Featured Works:** 2–4 project nổi bật, ảnh lớn, số thứ tự và nhãn.
5. **Latest Posts:** 3 bài mới nhất từ Markdown.
6. **About teaser:** giới thiệu ngắn và liên kết đến About.
7. **Footer:** social links, email nếu được cung cấp, năm hiện tại và nút back-to-top.

Không bịa tên, tiểu sử, email, mạng xã hội hoặc dự án của chủ website. Dùng placeholder dễ nhận biết và ghi trong README cần thay.

### 4.2 About — `/about/`

- Intro ngắn về cá nhân.
- Kỹ năng/lĩnh vực quan tâm.
- Quy trình làm việc hoặc triết lý sáng tạo.
- Timeline hoặc các mốc nổi bật (có thể bỏ nếu chưa có dữ liệu).
- Liên kết mạng xã hội/email dạng placeholder.
- Ảnh chân dung hoặc artwork tùy chọn.

### 4.3 Posts — `/posts/`

- Danh sách bài viết lấy từ Markdown.
- Bài mới nhất ở đầu.
- Card có tiêu đề, excerpt, ngày, thời gian đọc, tag.
- Có tìm kiếm theo tiêu đề/nội dung và lọc tag nếu khả thi.
- Trạng thái rỗng đẹp khi chưa có bài.
- Phân trang chỉ thêm khi số lượng bài đủ lớn; bản đầu có thể dùng danh sách đơn.

### 4.4 Chi tiết bài viết — `/posts/[slug]/`

- Tiêu đề, ngày đăng, thời gian đọc, tag.
- Nội dung Markdown có heading, quote, list, code, ảnh và link.
- Mục lục tự sinh cho bài dài nếu dễ triển khai.
- Thanh tiến độ đọc mảnh ở đầu trang (tùy chọn).
- Điều hướng bài trước/bài sau.
- Bài liên quan theo tag (tùy chọn).
- Nút quay lại Posts.
- Typography nội dung ưu tiên khả năng đọc; không áp dụng hiệu ứng giật mạnh lên từng đoạn văn.

### 4.5 Projects/Works — `/projects/`

- Portfolio tác phẩm/dự án theo card hoặc grid bất đối xứng.
- Mỗi project có ảnh, tên, mô tả, vai trò, công cụ, năm và link (nếu có).
- Có thể tạo trang chi tiết `/projects/[slug]/` nếu dữ liệu thực tế cần đến.
- Dữ liệu project có thể lưu trong Markdown/MDX hoặc content collection riêng.

### 4.6 Archive — `/archive/` (tùy chọn)

- Danh mục bài viết theo năm/tag.
- Có thể chứa artwork, ghi chú, ảnh, thử nghiệm hoặc các bản phát hành.
- Chỉ triển khai nếu làm trải nghiệm rõ hơn; tránh tạo trang trống.

### 4.7 Contact — `/contact/`

- Email và social links do chủ site cung cấp.
- Không xây form gửi thư cần backend. Có thể dùng `mailto:` và link mạng xã hội.
- Nếu chưa có dữ liệu, hiển thị placeholder rõ ràng trong nội dung mẫu, không đưa placeholder lên production mà không cảnh báo.

### Điều hướng đề xuất

`HOME / ABOUT / WORKS / POSTS / CONTACT`

Có thể đặt `ARCHIVE` làm liên kết phụ trong Posts hoặc footer.

---

## 5. Hệ thống thiết kế

### 5.1 CSS tokens

Tạo CSS variables tập trung, ví dụ:

- `--color-bg: #0A0A0A`
- `--color-surface: #151515`
- `--color-text: #E8E4DC`
- `--color-muted: #9A968F`
- `--color-accent: #D71920`
- `--color-border: #393633`
- `--font-display: ...`
- `--font-body: ...`
- `--font-mono: ...`
- `--content-width: ...`
- `--page-gutter: ...`
- `--ease-out: cubic-bezier(...)`

Chọn font có giấy phép phù hợp. Ưu tiên self-host hoặc nguồn đáng tin cậy, có fallback hệ thống. Không phụ thuộc vào font bên ngoài để website vẫn hiển thị ổn.

### 5.2 Thành phần tái sử dụng

- `SiteHeader`
- `MobileMenu`
- `SiteFooter`
- `PageTransition` (nếu cần; tránh làm hỏng lịch sử trình duyệt)
- `SectionHeading`
- `PostCard`
- `ProjectCard`
- `Tag`
- `Button`
- `NoiseOverlay`
- `ScrollProgress`
- `BackToTop`
- `CustomCursor` chỉ là tùy chọn desktop; mặc định nên dùng cursor hệ thống.

### 5.3 Layout

- Container nội dung có chiều rộng tối đa rõ ràng.
- Khoảng cách lớn giữa các section.
- Grid linh hoạt; không ép layout desktop vào mobile.
- Border, divider và nhãn nhỏ tạo cảm giác editorial.
- Nút bấm có vùng chạm đủ lớn trên mobile.
- Dùng semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`).

---

## 6. Kế hoạch hiệu ứng

Hiệu ứng phải làm website sống động nhưng không biến thành demo animation.

### Hiệu ứng ưu tiên

1. **Smooth anchor scrolling:** cuộn mượt cho liên kết trong cùng trang, có xử lý `prefers-reduced-motion`.
2. **Reveal on scroll:** section/card xuất hiện nhẹ bằng opacity + translate nhỏ; chỉ kích hoạt một lần bằng `IntersectionObserver`.
3. **Hero typography:** chữ xuất hiện theo nhóm hoặc mask reveal khi tải; không trì hoãn nội dung chính.
4. **Hover states:** ảnh zoom rất nhẹ, underline/line wipe, nút dịch chuyển 1–3 px.
5. **Parallax nhẹ:** chỉ dùng ở một số artwork trên desktop; tắt hoặc giảm trên mobile và reduced-motion.
6. **Page transition:** chỉ thêm nếu tương thích điều hướng, back/forward, hash links và GitHub Pages. Không làm trang trắng hoặc chậm khi chuyển trang.
7. **Reading progress:** tiến độ đọc trên trang bài viết.
8. **Back-to-top:** hiện sau khi cuộn một đoạn đủ dài.
9. **Grain/noise:** lớp CSS/SVG tĩnh hoặc animation rất chậm; tránh repaint toàn màn hình liên tục.

### Quy tắc kỹ thuật

- Ưu tiên `transform` và `opacity`; hạn chế animation `top`, `left`, `width`, `height` gây layout/repaint.
- Không chạy nhiều vòng lặp animation toàn màn hình.
- Không thêm thư viện animation nếu CSS và `IntersectionObserver` đáp ứng được.
- Tránh scroll hijacking; người dùng vẫn điều khiển cuộn bình thường.
- Tôn trọng `prefers-reduced-motion: reduce`: tắt parallax, reveal chuyển động, smooth scroll và animation không cần thiết.
- Không dùng âm thanh tự phát.
- Trên thiết bị yếu/mobile, giảm hoặc tắt hiệu ứng trang trí nặng.

---

## 7. Markdown và mô hình nội dung

### 7.1 Quy tắc bài viết

Mỗi bài viết là một file `.md` trong thư mục content. Dùng frontmatter thống nhất:

```yaml
---
title: "Tên bài viết"
description: "Mô tả ngắn cho SEO và danh sách bài."
pubDate: 2026-10-30
updatedDate: 2026-10-30
tags:
  - process
  - artwork
draft: true
cover: "/images/posts/sample-cover.jpg"
---
```

Quy tắc:

- `title`: bắt buộc.
- `description`: bắt buộc hoặc có fallback.
- `pubDate`: bắt buộc.
- `updatedDate`: tùy chọn.
- `tags`: mảng chuỗi.
- `draft`: bài nháp không xuất hiện trong production.
- `cover`: tùy chọn; nếu có, kiểm tra base path và ảnh tồn tại.
- Slug lấy từ tên file, ví dụ `my-first-post.md` → `/posts/my-first-post/`.
- Bài viết được sắp xếp theo `pubDate` giảm dần.
- Thời gian đọc được tính tự động từ nội dung.
- Thêm validation schema để frontmatter sai được phát hiện khi build.

### 7.2 Ví dụ nội dung

Tạo ít nhất hai bài mẫu có nội dung hữu ích, không dùng Lorem Ipsum. Gắn `draft: true` nếu đó chỉ là nội dung minh họa chưa được chủ site duyệt. README phải giải thích cách xuất bản bằng cách đổi `draft: false` hoặc bỏ trường draft theo quy ước đã chọn.

### 7.3 Nội dung Markdown cần hỗ trợ

- Heading H2–H4.
- Paragraph, bold, italic, inline code.
- Ordered/unordered lists.
- Blockquote.
- Code blocks có syntax highlighting nếu dễ cấu hình.
- Ảnh với alt text.
- Link ngoài có xử lý an toàn khi mở tab mới.
- Bảng nếu plugin Markdown đang dùng hỗ trợ.
- TOC tự sinh là tính năng tùy chọn.

Không cho phép HTML tùy ý trong Markdown nếu không cần thiết. Nếu bật MDX, giải thích rõ khác biệt và rủi ro nội dung.

---

## 8. Cấu trúc thư mục mong muốn

Agent có thể điều chỉnh theo phiên bản Astro, nhưng cần giữ phân tách rõ ràng:

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── posts/
│   ├── fonts/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── PostCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── SectionHeading.astro
│   │   └── ScrollProgress.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── posts/
│   │   │   ├── first-post.md
│   │   │   └── second-post.md
│   │   └── projects/
│   │       └── sample-project.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── posts/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── tags/
│   │   │   └── [tag].astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── scripts/
│   │   └── interactions.ts
│   └── styles/
│       ├── global.css
│       ├── typography.css
│       └── animations.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── PLAN.md
```

Cấu trúc chỉ là định hướng. Với Astro Content Collections, hãy dùng đúng API của phiên bản đang cài; không sao chép mù quáng API cũ.

---

## 9. SEO, chia sẻ và metadata

- Mỗi trang có title và meta description riêng.
- Canonical URL đúng với `site` và `base`.
- Open Graph/Twitter metadata.
- Favicon và theme color.
- Sitemap XML nếu tương thích cấu hình GitHub Pages.
- `robots.txt` phù hợp website public.
- Heading theo thứ tự logic.
- Ảnh có alt text; ảnh trang trí dùng alt rỗng.
- Trang 404 có phong cách đồng bộ và đường dẫn về Home/Posts.
- Không đưa email hoặc thông tin cá nhân chưa được chủ site cung cấp.

---

## 10. Hiệu năng và chất lượng

### Yêu cầu

- Build thành static files, không phụ thuộc server chạy liên tục.
- Tránh JavaScript cho phần chỉ cần HTML/CSS.
- Tối ưu kích thước ảnh; dùng WebP/AVIF khi phù hợp, giữ fallback hợp lý.
- Ảnh ngoài màn hình có lazy loading.
- Hero image nếu có phải được tối ưu để không làm chậm nội dung đầu tiên.
- Hạn chế font weights và font files.
- Không để layout shift lớn khi tải font/ảnh.
- Kiểm tra console và lỗi build.
- Kiểm tra mọi route và asset với base path của GitHub Pages.

### Accessibility

- Có skip link đến `main`.
- Menu mobile dùng được bằng bàn phím và có `aria-expanded`.
- Focus-visible rõ.
- Không chỉ dùng màu để truyền đạt trạng thái.
- Nội dung không biến mất nếu JavaScript tắt.
- Reduced motion hoạt động.
- Độ tương phản và kích thước chữ dễ đọc.

### Kiểm thử thủ công

- Desktop rộng.
- Tablet.
- Mobile hẹp.
- Menu mobile mở/đóng.
- Liên kết nội bộ và external links.
- Bài Markdown có ảnh, list, quote, code.
- Bài draft không xuất hiện ở production.
- Refresh trực tiếp ở `/posts/slug/`.
- 404.
- Project site với `base` khác `/`.
- Browser back/forward nếu có page transition.

---

## 11. Quy trình triển khai theo giai đoạn

### Giai đoạn 1 — Khởi tạo

1. Kiểm tra thư mục làm việc và repository hiện có; không xóa nội dung không liên quan.
2. Tạo Astro + TypeScript.
3. Cài dependencies tối thiểu.
4. Thiết lập cấu hình `site`, `base` và GitHub Pages.
5. Tạo cấu trúc content collections và schema.
6. Chạy build thử để xác nhận nền tảng hoạt động.

**Kết quả:** dự án build thành công và có cấu hình deploy đúng.

### Giai đoạn 2 — Design system và layout

1. Tạo CSS variables, font stack và global reset.
2. Tạo BaseLayout, header, footer, nút và tag.
3. Làm responsive navigation.
4. Tạo texture/ornament nhẹ bằng CSS/SVG.
5. Kiểm tra tương phản, focus và reduced motion.

**Kết quả:** khung giao diện nhất quán.

### Giai đoạn 3 — Trang Home/About

1. Làm hero typography.
2. Tạo section Featured Works.
3. Lấy latest posts từ content collection.
4. Tạo About và các placeholder có đánh dấu.
5. Tạo footer và liên kết liên hệ.

**Kết quả:** Home và About hoàn chỉnh ở desktop/mobile.

### Giai đoạn 4 — Blog Markdown

1. Xây trang Posts.
2. Xây trang chi tiết bài.
3. Render Markdown và frontmatter.
4. Tính thời gian đọc.
5. Thêm tag pages và lọc/tìm kiếm cơ bản.
6. Thêm draft filtering.
7. Thêm ví dụ bài viết và hướng dẫn tạo bài.

**Kết quả:** chỉ cần thêm file `.md` là có bài mới sau build.

### Giai đoạn 5 — Projects/Contact

1. Tạo content collection cho projects.
2. Làm grid project.
3. Tạo trang chi tiết project nếu cần.
4. Tạo Contact tĩnh với `mailto:`/social links.
5. Bảo đảm placeholder được liệt kê trong README.

**Kết quả:** portfolio thể hiện được tác phẩm và cách liên hệ.

### Giai đoạn 6 — Motion polish

1. Thêm reveal bằng `IntersectionObserver`.
2. Thêm hover states.
3. Thêm hero entrance.
4. Thêm scroll progress cho bài viết nếu phù hợp.
5. Chỉ thêm page transition/parallax khi có lợi ích rõ ràng.
6. Kiểm tra reduced motion và thiết bị mobile.

**Kết quả:** hiệu ứng có cá tính nhưng không ảnh hưởng trải nghiệm.

### Giai đoạn 7 — SEO, test, deploy

1. Thêm metadata, Open Graph, sitemap và favicon.
2. Chạy lint/typecheck nếu đã cấu hình, sau đó `npm run build`.
3. Kiểm tra output và đường dẫn với base path.
4. Tạo GitHub Actions workflow.
5. Viết README đầy đủ.
6. Hướng dẫn bật GitHub Pages bằng GitHub Actions trong Settings.
7. Commit thay đổi nếu người dùng yêu cầu; không tự ý push hoặc thay đổi remote nếu chưa được cho phép.

**Kết quả:** sẵn sàng deploy và có hướng dẫn vận hành.

---

## 12. Tiêu chí nghiệm thu

Chỉ xem là hoàn thành khi:

- [ ] Có Home, About, Posts, chi tiết post, Projects và Contact.
- [ ] Tất cả trang có thiết kế thống nhất hardcore slam.
- [ ] Giao diện responsive và điều hướng hoạt động.
- [ ] Có các hiệu ứng cuộn/hover/reveal mượt, không hijack scroll.
- [ ] `prefers-reduced-motion` được tôn trọng.
- [ ] Có thể thêm bài bằng Markdown với frontmatter.
- [ ] Draft không xuất hiện trong production.
- [ ] Posts được sắp xếp mới nhất trước.
- [ ] Tag và tìm kiếm/lọc hoạt động nếu được đưa vào phạm vi.
- [ ] Ảnh, CSS, JS và link không lỗi khi dùng GitHub Pages project path.
- [ ] `npm run build` thành công.
- [ ] Có trang 404, metadata SEO, favicon và README.
- [ ] Không còn nội dung mẫu giả mạo như thông tin cá nhân, email hoặc dự án thật.
- [ ] Không có lỗi nghiêm trọng trong console.
- [ ] Đã hướng dẫn người dùng bật GitHub Pages và cập nhật nội dung.

---

## 13. README bắt buộc phải có

README cần giải thích ngắn gọn, rõ ràng:

1. Công nghệ sử dụng.
2. Cách cài Node.js và dependencies.
3. Lệnh chạy local.
4. Cách build.
5. Cách đổi tên, tagline, About và social links.
6. Cách thêm project.
7. Cách thêm bài Markdown, frontmatter và ảnh.
8. Cách đánh dấu draft/publish.
9. Cách cấu hình `site`/`base` cho repository.
10. Cách bật GitHub Pages với GitHub Actions.
11. Cách xử lý lỗi đường dẫn ảnh và build.
12. Danh sách placeholder cần thay trước khi public.

---

## 14. Hướng dẫn thực thi cho Agent

Hãy triển khai theo thứ tự, không chỉ trả về ví dụ hoặc hướng dẫn lý thuyết.

1. Kiểm tra repository và môi trường hiện có.
2. Tóm tắt kế hoạch thực hiện trong vài dòng.
3. Tạo dự án và các file thực tế.
4. Hoàn thiện chức năng nội dung trước, sau đó polish giao diện.
5. Chạy build và sửa mọi lỗi do thay đổi của mình gây ra.
6. Kiểm tra route, responsive, base path và reduced motion.
7. Viết README.
8. Kết thúc bằng báo cáo: đã tạo gì, lệnh đã chạy, kết quả build, việc người dùng cần thay và các bước deploy.
9. Nếu thiếu thông tin cá nhân, dùng placeholder có chú thích thay vì tự bịa.
10. Nếu gặp lựa chọn nhỏ chưa được chỉ định, hãy chọn phương án đơn giản, ổn định, dễ bảo trì và tiếp tục; chỉ hỏi lại khi thiếu thông tin chặn tiến độ.

### Ưu tiên quyết định

**Chất lượng nội dung và điều hướng > hiệu năng và accessibility > hiệu ứng trang trí.**

Không hy sinh khả năng đọc, tốc độ hoặc trải nghiệm mobile chỉ để tăng số lượng hiệu ứng.

---

## 15. Thông tin cần cá nhân hóa sau khi scaffold

Để biến bản mẫu thành portfolio thật, cần thay các giá trị sau:

- `[YOUR NAME / ARTIST NAME]`
- `[TAGLINE]`
- `[SHORT BIO]`
- `[SKILLS / DISCIPLINES]`
- `[PROJECTS AND IMAGES]`
- `[CONTACT EMAIL]`
- `[SOCIAL LINKS]`
- `[GITHUB USERNAME]`
- `[REPOSITORY NAME]`

Nếu chưa có các thông tin này, hãy để placeholder rõ ràng và tiếp tục xây dựng phần kỹ thuật/giao diện.
