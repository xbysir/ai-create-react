import axios, { AxiosResponse } from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: "/api", // API的基础URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error("请求错误:", error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const res = response.data;
    // 根据自己的业务逻辑处理响应
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    console.error("响应错误:", error);
    // 可以根据错误状态码做不同的处理
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权处理
          break;
        case 403:
          // 禁止访问处理
          break;
        case 404:
          // 资源不存在处理
          break;
        case 500:
          // 服务器错误处理
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

export default service;
