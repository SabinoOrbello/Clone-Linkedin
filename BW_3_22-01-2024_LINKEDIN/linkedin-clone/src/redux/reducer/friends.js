import { SET_FRIENDS } from "../action";

const friendsReducer = (state = { friendsState: [] }, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friendsState: action.payload,
      };
    default:
      return state;
  }
};

export default friendsReducer;
