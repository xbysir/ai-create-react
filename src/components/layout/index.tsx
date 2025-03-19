import React from 'react';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Outlet, useLocation, Link } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      label: <Link to="/" className="nav-link">首页</Link>,
    },
    {
      key: '/about',
      label: <Link to="/about" className="nav-link">关于</Link>,
    },
    {
      key: '/blog',
      label: <Link to="/blog" className="nav-link">博客</Link>,
    },
    {
      key: '/docs',
      label: <Link to="/docs" className="nav-link">文档</Link>,
    },
    {
      key: '/projects',
      label: <Link to="/projects" className="nav-link">项目</Link>,
    },

  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-10">
              <h1 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors cursor-pointer">React App</h1>
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  {menuItems.map((item) => (
                    <li key={item.key}>
                      <Link
                        to={item.key}
                        className={`py-2 px-1 text-[15px] ${location.pathname === item.key 
                          ? 'text-primary font-medium border-b-2 border-primary' 
                          : 'text-gray-600 hover:text-primary hover:border-b-2 hover:border-primary/30 transition-all duration-200'}`}
                      >
                        {item.label.props.children}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserOutlined className="text-gray-600" />
                </span>
                <span className="text-gray-800">管理员</span>
              </div>
              <button
                onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
                className="md:hidden text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                <MenuOutlined className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuVisible && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setMobileMenuVisible(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
            <nav className="py-4">
              <div className="flex items-center justify-between px-4 mb-4 border-b border-gray-100 pb-4">
                <h2 className="text-lg font-semibold text-gray-800">菜单</h2>
                <button
                  onClick={() => setMobileMenuVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      to={item.key}
                      className={`block px-4 py-2.5 ${location.pathname === item.key 
                        ? 'bg-primary/5 text-primary font-medium border-l-4 border-primary' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                      onClick={() => setMobileMenuVisible(false)}
                    >
                      {item.label.props.children}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}

      <main className="p-6 m-6 bg-white rounded-lg shadow-sm">
        <Outlet />
      </main>
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">React App</h3>
              <p>现代化的React应用模板，集成了多种前端开发工具。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                快速链接
              </h3>
              <ul className="space-y-2 text-white">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    首页
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    关于
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    博客
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                联系我们
              </h3>
              <p>邮箱: example@example.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>© {new Date().getFullYear()} React App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;