import React, { useState } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  readTime: string;
  coverImage?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "React 18 新特性详解",
    summary:
      "深入探讨React 18带来的新特性，包括并发渲染、自动批处理、Suspense改进等重要更新。",
    date: "2024-01-15",
    tags: ["React", "JavaScript", "前端开发"],
    readTime: "8 min",
    coverImage:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "TypeScript 5.0 最佳实践",
    summary:
      "探索TypeScript 5.0中的新语法特性，以及在实际项目中的应用技巧和最佳实践。",
    date: "2024-01-10",
    tags: ["TypeScript", "编程语言", "最佳实践"],
    readTime: "10 min",
    coverImage:
      "https://images.unsplash.com/photo-1542831371-32f555c86880?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Vite vs Webpack: 构建工具对比",
    summary: "详细对比Vite和Webpack在开发体验、构建性能和生态系统方面的差异。",
    date: "2024-01-05",
    tags: ["Vite", "Webpack", "构建工具"],
    readTime: "12 min",
    coverImage:
      "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=400&h=200&fit=crop",
  },
];

const POSTS_PER_PAGE = 5;

const BlogList: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 根据选中的标签过滤文章
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  // 计算总页数
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // 获取当前页的文章
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // 处理标签点击
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setCurrentPage(1); // 重置页码
  };

  // 处理页码变化
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
          技术博客
        </h1>

        {/* 标签过滤器 */}
        <div className="mb-8 flex flex-wrap gap-2">
          {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map(
            (tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedTag === tag
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-primary hover:text-white"
                }`}
              >
                {tag}
              </button>
            ),
          )}
        </div>

        {/* 博客文章列表 */}
        <div className="space-y-8">
          {currentPosts.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                暂无相关文章
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                当前分类下还没有文章，请尝试其他分类。
              </p>
            </div>
          ) : (
            currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  {post.coverImage && (
                    <img
                      className="mb-4 w-full h-40 rounded-lg overflow-hidden object-cover"
                      src={post.coverImage}
                      alt={`${post.title}的封面图片`}
                      loading="lazy"
                    />
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>

        {/* 分页 */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-primary hover:text-white"
                }`}
              >
                上一页
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-primary hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-primary hover:text-white"
                }`}
              >
                下一页
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
