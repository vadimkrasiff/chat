import "./App.scss";
import { Outlet } from "react-router-dom";
import Sider from "./page/MainPage/components/Sider/Sider";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sider />
      <Outlet />
    </div>
  );
}

export default App;
