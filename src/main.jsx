import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Skills from "./Components/Skills.jsx";
import Navbar from "./Components/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/Portfolio", // This will be the main entry point
    element: <App />, // This is the root element for /Portfolio
    children: [
      { path: "navbar", element: <Navbar /> }, // Child route for /Portfolio/navbar
      { path: "skills", element: <Skills /> }, // Child route for /Portfolio/skills
    ],
  },
  {
    path: "/hello", // A separate route /hello
    element: <Skills />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
