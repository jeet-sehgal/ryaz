import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import MainComp from "./components/MainComp.jsx";
import OneChild from "./components/OneChild.jsx";
import ThirdChild from "./components/ThirdChild.jsx";

function One() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  return (
    <OneChild
      name={name}
      setName={setName}
      phone={phno}
      setPhone={setPhno}
      email={email}
      setEmail={setEmail}
    />
  );
}
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <MainComp
            heading={"Personal Info"}
            desc={"please provide your name, email, address, phone number"}
            child={<One />}
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
            child={<ThirdChild />}
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
