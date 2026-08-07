# Prompt

Bạn là một Senior Frontend Developer và UX Designer có nhiều kinh nghiệm xây dựng portfolio cho lập trình viên.

Hãy giúp tôi xây dựng một GitHub Portfolio chạy bằng GitHub Pages (React + Next.js hoặc HTML/CSS/JavaScript nếu phù hợp) với mục tiêu **gây ấn tượng với nhà tuyển dụng**, không phải để bán dịch vụ freelance.

## Mục tiêu

Portfolio phải tạo cảm giác:

- Chuyên nghiệp
- Hiện đại
- Tối giản
- Tốc độ tải nhanh
- Responsive trên mọi thiết bị
- Dễ đọc
- Có điểm nhấn nhưng không quá màu mè

Phong cách thiết kế tham khảo:

- Vercel
- Linear
- Stripe
- GitHub
- shadcn/ui

## Đối tượng xem

- Tech Lead
- Engineering Manager
- HR IT
- Nhà tuyển dụng

Thông thường họ chỉ dành khoảng **30–60 giây** để xem portfolio, vì vậy mọi thông tin quan trọng phải xuất hiện ngay ở đầu.

---

## Công nghệ

Ưu tiên:

- Next.js
- TypeScript
- TailwindCSS
- Framer Motion (animation nhẹ)
- Lucide Icons

Nếu một công nghệ không thực sự cần thiết thì không sử dụng.

---

## Yêu cầu giao diện

Thiết kế theo phong cách tối giản.

Có Dark Mode.

Animation nhẹ:

- fade
- slide
- hover
- smooth scrolling

Không dùng animation rườm rà.

---

## Cấu trúc trang

### Hero

Bao gồm:

- Avatar
- Họ tên
- Chức danh

Ví dụ:

Frontend Developer

hoặc

Frontend Developer | Learning Backend with NestJS

Có nút:

- Download CV
- View GitHub
- Contact

Có đoạn giới thiệu ngắn khoảng 3–5 dòng.

---

### About

Viết phần giới thiệu chuyên nghiệp.

Nhấn mạnh:

- kinh nghiệm
- tư duy giải quyết vấn đề
- khả năng học nhanh
- clean code
- teamwork

---

### Skills

Hiển thị dạng card hoặc badge.

Chia nhóm:

Frontend

- React
- Next.js
- TypeScript
- JavaScript
- HTML
- CSS
- TailwindCSS

Backend

- NestJS
- REST API
- JWT
- Prisma
- PostgreSQL

Tools

- Git
- GitHub
- Docker
- Postman
- VS Code

---

### Featured Projects

Hiển thị mỗi project dưới dạng card.

Mỗi card gồm:

- ảnh preview
- tên project
- mô tả ngắn
- công nghệ
- GitHub
- Demo
- Vai trò
- Những gì học được

Thiết kế card đẹp, hiện đại.

---

### GitHub Activity

Hiển thị:

- GitHub contribution graph
- GitHub Stats
- Top Languages

Nếu dùng API thì hướng dẫn cách tích hợp.

---

### Experience

Timeline.

Mỗi mục gồm:

- Company
- Position
- Duration
- Achievement

---

### Education

Hiển thị ngắn gọn.

---

### Certificates

Card:

- Tên chứng chỉ
- Đơn vị cấp
- Năm

---

### Contact

Có:

- Email
- GitHub
- LinkedIn
- Facebook (nếu muốn)

Nút Copy Email.

---

## Footer

Đơn giản.

Ví dụ:

Built with Next.js + TailwindCSS.

---

## Hiệu ứng

Chỉ dùng:

- hover card
- hover button
- fade in
- reveal on scroll
- smooth transition

Không dùng:

- hiệu ứng bay
- xoay
- particle
- animation nặng

---

## SEO

Thêm đầy đủ:

- title
- description
- favicon
- Open Graph
- Twitter Card

---

## Performance

Đạt mục tiêu:

- Lighthouse >95
- Responsive
- Accessibility tốt
- Lazy Loading
- Image Optimization

---

## Code Quality

Yêu cầu:

- Clean Architecture
- Component tái sử dụng
- Không lặp code
- TypeScript strict
- Comment khi cần
- Dễ mở rộng

---

## Cấu trúc thư mục

Thiết kế một cấu trúc thư mục chuẩn cho dự án Next.js, ví dụ:

- app/
- components/
- sections/
- lib/
- data/
- public/
- styles/
- types/
- hooks/

Giải thích ngắn vai trò của từng thư mục.

---

## Dữ liệu

Không hardcode trực tiếp.

Đưa toàn bộ:

- thông tin cá nhân
- project
- skills
- experience

vào các file riêng để sau này chỉ cần sửa dữ liệu.

---

## Hướng dẫn triển khai

Sau khi hoàn thành:

1. Hướng dẫn chạy local.
2. Hướng dẫn build production.
3. Hướng dẫn deploy lên GitHub Pages.
4. Hướng dẫn custom thông tin cá nhân.
5. Hướng dẫn thêm project mới.
6. Hướng dẫn đổi theme.

---

## Cách làm việc

Không tạo toàn bộ code trong một lần.

Thực hiện theo từng bước:

1. Thiết kế kiến trúc dự án.
2. Tạo cấu trúc thư mục.
3. Cài đặt dependency.
4. Xây dựng layout.
5. Xây từng section.
6. Responsive.
7. Animation.
8. SEO.
9. Performance.
10. Deploy.

Sau khi hoàn thành mỗi bước, dừng lại để tôi review rồi mới tiếp tục sang bước tiếp theo.
