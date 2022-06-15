const initState = {
  loginInformation: {},
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    // 设置登录信息
    case "loginInformation":
      state.loginInformation = action.payload;
      console.log(state, "/");
      return state;
    default:
      return state;
  }
};

export default reducer;
