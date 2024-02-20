import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.scss";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainPage from "./page/MainPage/MainPage.tsx";
import AuthPage from "./page/AuthPage/AuthPage.tsx";
import Sider from "./page/MainPage/components/Sider/Sider.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div style={{ display: "flex" }}>
        <Sider />
        <div>404 Not found</div>
      </div>
    ),
    children: [
      {
        path: "/settings",
        element: <div>Настройки</div>,
      },
      {
        path: "/",
        element: <Navigate to="/im" replace />,
      },
      {
        path: "/im/:id?",
        element: <MainPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
