import { SET_NAME } from "./actions/user.action";

const initialState = {
  name: "Tolik",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
