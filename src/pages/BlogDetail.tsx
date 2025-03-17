import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  author: string;
}

const blogPost: BlogPost = {
  id: 1,
  title: "React 19 新特性详解",
  content: `React 19 带来了一系列重大更新，这些创新将进一步提升React应用的性能和开发效率。

## 增强的并发渲染

在React 19中，并发渲染功能得到了显著增强。新版本进一步优化了渲染优先级管理，使应用能更智能地处理复杂的UI更新，提供更流畅的用户体验。

### 主要优势
- 更智能的渲染调度
- 更出色的性能表现
- 更强大的并发控制

## 改进的服务器组件

React 19对服务器组件进行了全面升级，提供了更强大的服务端渲染能力和更好的数据流管理。这些改进使得构建大规模应用变得更加高效。

## 新的状态管理

React 19引入了更先进的状态管理机制，使状态更新和数据流更加直观和高效，同时保持了出色的性能表现。

## 创新的Hooks

React 19带来了一系列新的Hooks，为开发者提供更强大的工具：
- useOptimistic
- useFormStatus
- useFormState

这些新Hook能帮助开发者构建更复杂的交互功能，同时保持代码的简洁和可维护性。`,
  date: "2024-01-15",
  tags: ["React", "JavaScript", "前端开发"],
  readTime: "8 min",
  author: "技术团队",
};

const relatedPosts = [
  {
    id: 2,
    title: "TypeScript 5.0 最佳实践",
    summary:
      "探索TypeScript 5.0中的新语法特性，以及在实际项目中的应用技巧和最佳实践。",
  },
  {
    id: 3,
    title: "Vite vs Webpack: 构建工具对比",
    summary: "详细对比Vite和Webpack在开发体验、构建性能和生态系统方面的差异。",
  },
];

const BlogDetail: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 文章头部 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <span>作者：{blogPost.author}</span>
            <span>发布于：{blogPost.date}</span>
            <span>阅读时间：{blogPost.readTime}</span>
          </div>
        </div>

        {/* 标签 */}
        <div className="mb-8 flex flex-wrap gap-2">
          {blogPost.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 文章内容 */}
        <article className="prose prose-lg max-w-none mb-12">
          {blogPost.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("##")) {
              const level = paragraph.startsWith("###") ? 3 : 2;
              const title = paragraph.replace(/^#{2,3}\s/, "").trim();
              const HeadingTag = level === 3 ? "h3" : "h2";
              return React.createElement(
                HeadingTag,
                {
                  key: index,
                  className:
                    level === 3
                      ? "text-xl font-bold mt-6 mb-3"
                      : "text-2xl font-bold mt-8 mb-4",
                },
                title,
              );
            } else if (paragraph.startsWith("-")) {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside my-4 pl-4 space-y-2"
                >
                  {paragraph
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {item.replace(/^\s*-\s*/, "").trim()}
                      </li>
                    ))}
                </ul>
              );
            } else {
              return (
                <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                  {paragraph}
                </p>
              );
            }
          })}
        </article>

        {/* 相关文章 */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-6">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
