import React from "react";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "张三",
      role: "前端开发负责人",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop",
      description: "5年React开发经验，专注于前端架构设计和性能优化",
    },
    {
      name: "李四",
      role: "UI/UX设计师",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      description: "擅长现代化Web界面设计，注重用户体验",
    },
    {
      name: "王五",
      role: "全栈开发工程师",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop",
      description: "全栈开发专家，熟悉前后端技术栈",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-duration-1000">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-info to-primary bg-clip-text text-transparent">
          关于我们
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          专业的前端开发团队，为您提供现代化的Web解决方案
        </p>
      </div>

      {/* 技术栈部分 */}
      <div className="max-w-4xl mx-auto mb-16 animate-fade-in animate-duration-700 animate-delay-200">
        <h2 className="text-2xl font-bold mb-8 text-center text-primary">
          我们的技术栈
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">⚛️</div>
            <span className="text-sm font-medium">React 19</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">⚡</div>
            <span className="text-sm font-medium">Vite</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">📘</div>
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">🎨</div>
            <span className="text-sm font-medium">UnoCSS</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">🔍</div>
            <span className="text-sm font-medium">ESLint</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">✨</div>
            <span className="text-sm font-medium">Prettier</span>
          </div>
        </div>
      </div>

      {/* 团队成员部分 */}
      <div className="max-w-4xl mx-auto mb-16 animate-fade-in animate-duration-700 animate-delay-300">
        <h2 className="text-2xl font-bold mb-8 text-center text-primary">
          团队成员
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="text-primary text-sm mb-3">{member.role}</div>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 项目特点说明 */}
      <div className="max-w-3xl mx-auto animate-fade-in animate-duration-700 animate-delay-400">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-primary">
            为什么选择我们的模板？
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              现代化的技术栈，确保项目的可维护性和扩展性
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              完善的工程化配置，开箱即用的开发体验
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              响应式设计，完美适配各种设备
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              深色模式支持，提供更好的用户体验
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
