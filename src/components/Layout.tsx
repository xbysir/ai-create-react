import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <header
          className={`fixed w-full z-50  transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur-sm" : "bg-transparent"}`}
        >
          <div className="py-5 w-full flex justify-between items-center ">
            <Link
              to="/"
              className="text-xl font-bold text-primary hover:text-primary-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2">React App</span>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className={`nav-link ${location.pathname === "/" ? "text-primary font-medium" : "hover:text-primary"}`}
                  >
                    首页
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`nav-link ${location.pathname === "/about" ? "text-primary font-medium" : "hover:text-primary"}`}
                  >
                    关于
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`nav-link ${location.pathname.startsWith("/blog") ? "text-primary font-medium" : "hover:text-primary"}`}
                  >
                    博客
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>

        <main className="flex-grow pt-16">
          <Outlet />
        </main>
      </div>
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
    </>
  );
};

export default Layout;
