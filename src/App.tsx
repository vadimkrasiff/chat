import "./App.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Sider from "./page/MainPage/components/Sider/Sider";
import { useEffect, useCallback } from "react";
import { getMe } from "api/user.ts";
import { useDispatch } from "react-redux";
import { setUserAC } from "actions";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getDataMe = useCallback(async () => {
    const data = await getMe();
    if (!!data) {
      dispatch(setUserAC(data));
    } else {
      navigate("/login");
      localStorage.removeItem("token");
    }
  }, [dispatch, navigate]);
  useEffect(() => {
    getDataMe();
  }, [getDataMe]);

  return (
    <div style={{ display: "flex" }}>
      <Sider />
      <Outlet />
    </div>
  );
}

export default App;
