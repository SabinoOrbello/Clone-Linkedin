import { SET_JOBS, SET_QUERY } from "../action/jobs";

const initialState = {
  jobs: {},
  isLoading: true,
  category: "",
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        isLoading: false,
      };
    case SET_QUERY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
