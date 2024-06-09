import React from "react";
import "./dayjsSetup";
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
import SettingPage from "./page/SettingPage/SettingPage.tsx";
import ProfilePage from "./page/ProfilePage/ProfilePage.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore.ts";

const router = createBrowserRouter([
  {
    path: "/login",
    element:  <Provider store={store}><AuthPage /></Provider>,
  },
  {
    path: "/",
    element: <Provider store={store}><App /></Provider>,
    errorElement: (
      <div style={{ display: "flex" }}>
        <Sider />
        <div>404 Not found</div>
      </div>
    ),
    children: [
      {
        path: "/settings",
        element: <SettingPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/",
        element: <Navigate to="/im" replace />,
      },
      {
        path: "/im/:id?/info?",
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
