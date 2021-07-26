const initialValue = null;

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return null;

    default:
      return state;
  }
};

export default authReducer;
