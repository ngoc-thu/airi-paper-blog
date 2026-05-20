import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Trang chủ",
    posts: "Bài viết",
    tags: "Thẻ",
    about: "Giới thiệu",
    archives: "Lưu trữ",
    search: "Tìm kiếm",
  },
  post: {
    publishedAt: "Đăng lúc",
    updatedAt: "Cập nhật",
    sharePostIntro: "Chia sẻ bài viết:",
    sharePostOn: "Chia sẻ bài viết trên {{platform}}",
    sharePostViaEmail: "Chia sẻ bài viết qua email",
    tagLabel: "Thẻ",
    backToTop: "Lên đầu trang",
    goBack: "Quay lại",
    editPage: "Sửa trang",
    previousPost: "Bài trước",
    nextPost: "Bài sau",
  },
  pagination: {
    prev: "Trước",
    next: "Sau",
    page: "Trang",
  },
  home: {
    socialLinks: "Liên kết",
    featured: "Nổi bật",
    recentPosts: "Bài mới",
    allPosts: "Tất cả bài viết",
    eyebrow: "AIRI PAPER WORKSPACE",
    title: "Một kho lưu trữ gọn gàng cho các paper đang làm.",
    description:
      "Một workspace tập trung cho paper, ghi chú đọc và bài viết kỹ thuật. Thiết kế theo cảm giác utility dashboard hơn là blog thông thường.",
    browsePapers: "Xem papers",
  },
  empty: {
    archiveLabel: "Kho lưu trữ trống",
    noPapersTitle: "Chưa có paper.",
    noPapersDesc:
      "Thêm file Markdown hoặc MDX vào src/content/posts và bài sẽ xuất hiện ở đây.",
    noTagsLabel: "Chưa có thẻ",
    noTagsTitle: "Chưa có thẻ paper.",
    noTagsDesc: "Thẻ sẽ xuất hiện sau khi paper đầu tiên được đăng.",
    noDatedTitle: "Chưa có paper theo ngày.",
    noDatedDesc:
      "Khi có paper được đăng, bài sẽ được nhóm ở đây theo năm và tháng.",
  },
  footer: {
    copyright: "Bản quyền",
    allRightsReserved: "Đã đăng ký mọi quyền.",
  },
  pages: {
    tagTitle: "Thẻ",
    tagDesc: "Tất cả bài viết có thẻ",

    tagsTitle: "Thẻ",
    tagsDesc: "Tất cả thẻ được dùng trong bài viết.",

    postsTitle: "Bài viết",
    postsDesc: "Tất cả bài viết đã đăng.",

    archivesTitle: "Lưu trữ",
    archivesDesc: "Tất cả bài viết đã lưu trữ.",

    searchTitle: "Tìm kiếm",
    searchDesc: "Tìm trong các bài viết ...",

    aboutTitle: "Giới thiệu",
    aboutDesc: "Một chút về trang blog này.",
    aboutIntro1: "Airi paper là một blog tối giản được xây bằng",
    aboutIntro2:
      "Airi paper được thiết kế cho lối viết rõ ràng, tải trang nhanh và trải nghiệm đọc dễ chịu trên cả desktop lẫn mobile.",
    aboutIntro3:
      "Bài viết dùng Markdown hoặc MDX, giúp việc xuất bản đơn giản nhưng vẫn hỗ trợ nội dung kỹ thuật phong phú.",
    aboutFeaturesTitle: "Tính năng",
    aboutFeatureSeo: "Thân thiện SEO",
    aboutFeaturePerformance: "Hiệu năng nhanh",
    aboutFeatureTheme: "Light & dark mode",
    aboutFeatureCustomizable: "Dễ tuỳ biến",
    aboutFeatureOrganizable: "Dễ tổ chức bài viết",
    aboutFeatureResponsive: "Responsive & accessible",
    aboutFeatureSearch: "Tìm kiếm tĩnh bằng PageFind",
    aboutFeatureOg: "Tự động tạo ảnh social",
    aboutMore: "và nhiều thứ khác.",
    aboutContactTitle: "Liên hệ",
    aboutContactDesc:
      "Trang này vẫn đang được hoàn thiện. Các bài viết và ghi chú dự án mới sẽ được thêm dần.",
  },
  language: {
    label: "Ngôn ngữ",
    switchTo: "English",
  },
  a11y: {
    skipToContent: "Bỏ qua đến nội dung",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    toggleTheme: "Đổi theme",
    searchPlaceholder: "Tìm bài viết...",
    noResults: "Không tìm thấy kết quả",
    goToPreviousPage: "Đến trang trước",
    goToNextPage: "Đến trang sau",
  },
  notFound: {
    title: "404 Không tìm thấy",
    message: "Không tìm thấy trang",
    goHome: "Quay về trang chủ",
  },
} satisfies UIStrings;
