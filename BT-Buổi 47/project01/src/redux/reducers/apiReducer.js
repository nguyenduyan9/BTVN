const initialValue = {
  isLogin: false,
  email: "",
};
export default function apiReducer(state = initialValue, action) {
  switch (action.type) {
    case "api/getEmail": {
      return { ...state, isLogin: true, email: action.payload };
    }
    default: {
      return state;
    }
  }
}
