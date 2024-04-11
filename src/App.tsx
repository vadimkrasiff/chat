import "./App.scss";
import { Outlet } from "react-router-dom";
import Sider from "./page/MainPage/components/Sider/Sider";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore.ts";

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <Sider />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
