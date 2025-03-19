## 代码规范

- 使用 TypeScript 编写类型安全的代码
- 遵循 ESLint 规则保持代码风格一致
- 使用 Prettier 进行代码格式化

## 性能优化

- 合理使用 React.memo 避免不必要的重渲染
- 使用 useMemo 和 useCallback 优化性能
- 实现代码分割和懒加载优化首屏加载

## 状态管理

- 小型应用使用 Context + useReducer
- 大型应用考虑使用 Redux Toolkit
- 善用 React Query 处理服务端状态