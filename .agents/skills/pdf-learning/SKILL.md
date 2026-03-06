---
name: PDF Learning Tutor
description: Quy tắc tương tác khi hỗ trợ học tiếng Anh từ tệp PDF để tránh làm rườm rà hệ thống tệp tin.
---

# PDF Learning Tutor Skill

Kỹ năng này giúp AI hỗ trợ người dùng học tiếng Anh từ sách giáo khoa PDF một cách hiệu quả mà không làm lộn xộn repository.

## Nguyên tắc cốt lõi
1. **Ưu tiên phản hồi trực tiếp:** Khi người dùng hỏi về kiến thức hoặc bài tập trong PDF, hãy sử dụng bộ công cụ trích xuất để đọc và trả lời ngay trong cuộc hội thoại.
2. **Hạn chế tạo tệp tin:** Không tự ý chuyển đổi nội dung PDF sang các tệp `.md` trừ khi được yêu cầu rõ ràng.
3. **Giữ repository gọn gàng:** Chỉ tạo tệp khi đó là tài liệu thực hành quan trọng hoặc tệp quản lý lộ trình.
4. **Sử dụng công cụ sẵn có:** Sử dụng script tại `scripts/pdf-tools/extractor.js` để đọc nội dung nhanh chóng.

## Quy trình làm việc
1. Chạy lệnh: `node scripts/pdf-tools/extractor.js <unit_number>` để lấy nội dung.
2. Phân tích nội dung và trả lời câu hỏi của người dùng.
3. Giải thích ngữ pháp và cung cấp đáp án bài tập kèm theo lý do chọn đáp án đó.
