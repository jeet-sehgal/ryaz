import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import MainComp from "./components/MainComp.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/one",
        element: (
          <MainComp
            heading={"Personal Info"}
            desc={"please provide your name, email, address, phone number"}
          />
        ),
      },
      {
        path: "/two",
        element: (
          <MainComp
            heading={"Select Your Plan"}
            desc={"You have the option of monthly or yearly billing"}
          />
        ),
      },
      {
        path: "/three",
        element: (
          <MainComp
            heading={"Pick add-ons"}
            desc={"Add-ons help to enhance your gaming experience."}
          />
        ),
      },
      {
        path: "/forth",
        element: (
          <MainComp
            heading={"Finishing up"}
            desc={"Double-check everything looks OK before confirming."}
          />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
