import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import Categories from "./components/Categories.jsx";
import Contact from "./components/Contact";
import About from "./components/About";
import Param from "./components/Param";
import GitHub,{load} from "./components/GitHub.jsx";
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
      {
        loader:load,
        path:"/github",
        element:<GitHub />,
      },
      {
        path:"/user/:id",
        element:<Param />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
