import React from "react";
import Carousel from "../components/Carousel";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in animate-duration-1000">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
          现代化React开发模板
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-fade-in animate-delay-200">
          快速启动你的下一个React项目
        </p>
      </div>

      <Carousel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full animate-fade-in animate-duration-700 animate-delay-300">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-primary text-2xl mb-4">⚛️</div>
          <h2 className="text-xl font-semibold mb-2">React 19</h2>
          <p className="text-gray-600">
            最新的React特性支持，包括增强的并发渲染和改进的服务器组件
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-success text-2xl mb-4">⚡</div>
          <h2 className="text-xl font-semibold mb-2">Vite</h2>
          <p className="text-gray-600">闪电般的开发体验，快速的热更新和构建</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-info text-2xl mb-4">📘</div>
          <h2 className="text-xl font-semibold mb-2">TypeScript</h2>
          <p className="text-gray-600">类型安全的开发体验，提高代码质量</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-warning text-2xl mb-4">🎨</div>
          <h2 className="text-xl font-semibold mb-2">UnoCSS</h2>
          <p className="text-gray-600">高性能且灵活的原子化CSS解决方案</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-danger text-2xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold mb-2">代码质量</h2>
          <p className="text-gray-600">ESLint和Prettier确保代码质量和一致性</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-primary text-2xl mb-4">🌙</div>
          <h2 className="text-xl font-semibold mb-2">深色模式</h2>
          <p className="text-gray-600">内置深色模式支持，提供舒适的浏览体验</p>
        </div>
      </div>

      <div className="mt-12 text-center max-w-2xl animate-fade-in animate-duration-700 animate-delay-500">
        <h2 className="text-2xl font-bold mb-4 text-primary">开始使用</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          这个模板已经为你配置好了所有必要的工具和最佳实践，让你可以专注于创建令人惊叹的应用程序。
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-left">
          <code className="text-sm font-mono">
            git clone https://github.com/your-username/react-template.git
          </code>
        </div>
      </div>
    </div>
  );
};

export default Home;
