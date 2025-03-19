import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import BlogList from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Docs from "../pages/Docs";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <BlogList />,
      },
      {
        path: "blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
