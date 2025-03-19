import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "企业级 CRM 系统",
    description: "基于 React + TypeScript 开发的现代化 CRM 系统，提供客户管理、销售跟踪、数据分析等功能。",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "Ant Design", "Redux Toolkit", "React Query"],
    demoUrl: "https://demo.example.com/crm",
    features: [
      "响应式设计，支持多端适配",
      "实时数据同步和协作",
      "自定义仪表板和报表",
      "智能客户画像分析"
    ]
  },
  {
    id: 2,
    title: "在线教育平台",
    description: "面向企业培训的在线教育解决方案，支持直播课程、录播课程、在线考试等功能。",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    technologies: ["React", "Next.js", "TailwindCSS", "WebRTC", "Node.js"],
    demoUrl: "https://demo.example.com/edu",
    features: [
      "实时互动课堂",
      "智能学习路径推荐",
      "课程进度追踪",
      "学习数据分析"
    ]
  },
  {
    id: 3,
    title: "智能工厂管理系统",
    description: "工业物联网解决方案，实现生产线监控、设备管理、质量控制等功能。",
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=500&fit=crop",
    technologies: ["React", "Electron", "ECharts", "WebSocket", "Express"],
    demoUrl: "https://demo.example.com/factory",
    features: [
      "实时设备监控",
      "预测性维护提醒",
      "生产计划优化",
      "质量追溯系统"
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
          项目案例
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <div className="font-semibold mb-2">技术栈</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-white/20 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">主要功能</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    查看演示
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;