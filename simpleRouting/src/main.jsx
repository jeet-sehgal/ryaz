import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./Footer.jsx"
import Home from "./components/Home";
import Categories from "./components/Categories.jsx";
import Contact from "./components/Contact";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children :[
      {
        path:"/",
        element:<Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
