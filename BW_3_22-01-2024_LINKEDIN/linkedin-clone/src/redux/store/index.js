import { combineReducers, configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../reducer/friends";
import { thunk } from "redux-thunk";
import { profileReducer } from "../reducer/profile";
import isLoadingReducer from "../reducer/isLoading";
import { jobsReducer } from "../reducer/jobs";
import { postReducer } from "../reducer/post";

const bigReducer = combineReducers({
  friends: friendsReducer,
  profile: profileReducer,
  isLoading: isLoadingReducer,
  jobs: jobsReducer,
  post: postReducer,
});

const store = configureStore({
  reducer: bigReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
