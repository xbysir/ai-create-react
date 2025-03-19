export interface DocSection {
  id: string;
  title: string;
  sections: Array<{
    title: string;
    items?: string[];
  }>;
}

export const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: '快速开始',
    sections: [
      {
        title: '环境准备',
        items: [
          '安装 Node.js 18+ 版本',
          '安装 pnpm 包管理器',
          '克隆项目代码仓库'
        ]
      },
      {
        title: '开发流程',
        items: [
          '运行 pnpm install 安装依赖',
          '运行 pnpm dev 启动开发服务器',
          '在浏览器中访问 http://localhost:5173'
        ]
      }
    ]
  },
  {
    id: 'best-practices',
    title: '最佳实践',
    sections: [
      {
        title: '代码规范',
        items: [
          '使用 TypeScript 编写类型安全的代码',
          '遵循 ESLint 规则保持代码风格一致',
          '使用 Prettier 进行代码格式化'
        ]
      },
      {
        title: '性能优化',
        items: [
          '合理使用 React.memo 避免不必要的重渲染',
          '使用 useMemo 和 useCallback 优化性能',
          '实现代码分割和懒加载优化首屏加载'
        ]
      },
      {
        title: '状态管理',
        items: [
          '小型应用使用 Context + useReducer',
          '大型应用考虑使用 Redux Toolkit',
          '善用 React Query 处理服务端状态'
        ]
      }
    ]
  },
  {
    id: 'faq',
    title: '常见问题',
    sections: [
      {
        title: '开发相关',
        items: [
          '如何添加新的路由页面？',
          '如何处理接口请求错误？',
          '如何实现页面权限控制？'
        ]
      },
      {
        title: '部署相关',
        items: [
          '如何配置生产环境变量？',
          '如何部署到不同的环境？',
          '如何优化打包体积？'
        ]
      }
    ]
  }
];