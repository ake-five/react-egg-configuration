// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Home from "./view/Home";
import Profile from "./view/Profile";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addAction } from "./store/action";
function App() {
  // const dispatch = useDispatch();
  // dispatch(addAction({ name: "take five" }));
  // const action1 = (name) => (dispatch) => {
  //   // const res = await 异步动作();
  //   console.log(dispatch, name);
  //   dispatch(addAction({ name: "take five1" }));
  //   // dispatch({ type: "todos/add", payload: {} });
  // };
  // dispatch(action1("11"));
  // const state = useSelector((state) => {
  //   return state;
  // });
  // console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
