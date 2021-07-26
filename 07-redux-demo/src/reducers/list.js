const initialValue = [];

const listReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return null;

    default:
      return state;
  }
};

export default listReducer;
