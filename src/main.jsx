import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Skills from "./Components/Skills.jsx";
import Navbar from "./Components/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/navbar", element: <Navbar/> },
      { path: "/skills", element: <Skills /> },
    ],
  },
  {path:"/hello",element:<Skills/>}
  ,
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
