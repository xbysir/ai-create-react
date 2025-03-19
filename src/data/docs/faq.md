## 开发相关

### Q: 如何添加新的页面？

1. 在 src/pages 目录下创建新的页面组件
2. 在 src/router/index.tsx 中添加路由配置
3. 在导航菜单中添加对应链接

### Q: 如何处理环境变量？

- 开发环境使用 .env.development
- 生产环境使用 .env.production
- 使用 import.meta.env 访问环境变量

### Q: 如何处理 API 请求？

- 使用 src/utils/request.ts 中的封装方法
- 遵循 RESTful API 设计规范
- 实现统一的错误处理