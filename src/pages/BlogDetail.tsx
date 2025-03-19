import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  coverImage: string;
}

const blogPost: BlogPost = {
  id: 1,
  title: "React 19 新特性详解",
  coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
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
  author: {
    name: "技术团队",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    bio: "专注于前端技术研究和分享，致力于提升开发体验和应用性能。"
  },
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

interface Comment {
  id: number;
  content: string;
  user: {
    name: string;
    avatar: string;
  };
  date: string;
  likes: number;
}

const BlogDetail: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const [activeHeading, setActiveHeading] = React.useState<string>("");
  const [showComments, setShowComments] = React.useState(false);
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [newComment, setNewComment] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  // 提取文章标题
  const extractHeadings = (content: string) => {
    const headings = content.split("\n\n")
      .filter(p => p.startsWith("##"))
      .map(h => ({
        title: h.replace(/^#{2,3}\s/, "").trim(),
        level: h.startsWith("###") ? 3 : 2
      }));
    return headings;
  };

  const headings = extractHeadings(blogPost.content);

  // 监听滚动更新目录高亮
  React.useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll("h2, h3");
      let current = "";
      
      headingElements.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.textContent || "";
        }
      });
      
      setActiveHeading(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* 封面图片 */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img
            src={blogPost.coverImage}
            alt={blogPost.title}
            className="w-full h-64 object-cover"
          />
        </div>
        {/* 文章头部 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          {/* 作者信息卡片 */}
          <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
            <img
              src={blogPost.author.avatar}
              alt={blogPost.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900">{blogPost.author.name}</h3>
              <p className="text-sm text-gray-500">{blogPost.author.bio}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 text-gray-500">
            <span>发布于：{blogPost.date}</span>
            <span>阅读时间：{blogPost.readTime}</span>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-red-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
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

        {/* 文章目录 */}
        <div className="fixed top-32 right-8 w-48 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
          <h4 className="text-lg font-semibold mb-4">目录</h4>
          <nav>
            {headings.map((heading, index) => (
              <a
                key={index}
                href={`#${heading.title}`}
                className={`block py-1 text-sm ${heading.level === 3 ? 'pl-4' : ''} ${activeHeading === heading.title ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
              >
                {heading.title}
              </a>
            ))}
          </nav>
        </div>

        {/* 文章内容 */}
        <article className="prose prose-lg max-w-none mb-12">
          {/* 阅读进度条 */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
            <div
              className="h-full bg-blue-500 transition-all duration-200"
              style={{
                width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
              }}
            />
          </div>
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

        {/* 评论区 */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">评论</h2>
            <button
              onClick={() => setShowComments(!showComments)}
              className="text-blue-500 hover:text-blue-600"
            >
              {showComments ? "收起评论" : "展开评论"}
            </button>
          </div>
          
          {showComments && (
            <div className="space-y-6">
              <div className="flex space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
                  alt="用户头像"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="写下你的评论..."
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                  <button 
                    onClick={async () => {
                      if (!newComment.trim()) return;
                      setSubmitting(true);
                      try {
                        const newCommentObj: Comment = {
                          id: Date.now(),
                          content: newComment,
                          user: {
                            name: "当前用户",
                            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
                          },
                          date: new Date().toLocaleDateString(),
                          likes: 0
                        };
                        setComments(prev => [newCommentObj, ...prev]);
                        setNewComment("");
                      } catch (error) {
                        console.error("提交评论失败:", error);
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                    disabled={submitting || !newComment.trim()}
                    className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors ${submitting || !newComment.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                  >
                    {submitting ? "提交中..." : "发表评论"}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <img
                      src={comment.user.avatar}
                      alt={`${comment.user.name}的头像`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{comment.user.name}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="mt-1 text-gray-700">{comment.content}</p>
                      <div className="mt-2 flex space-x-4 text-sm text-gray-500">
                        <button 
                          onClick={() => {
                            setComments(prev =>
                              prev.map(c =>
                                c.id === comment.id
                                  ? { ...c, likes: c.likes + 1 }
                                  : c
                              )
                            );
                          }}
                          className="hover:text-blue-500 flex items-center space-x-1"
                        >
                          <span>点赞</span>
                          <span>({comment.likes})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 相关文章 */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-6">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{post.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
