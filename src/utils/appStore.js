import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GptSliceReducer from "./GptSlice";
import languageSliceReducer from "./languageSlice";
const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:GptSliceReducer,
            language:languageSliceReducer,
        }
    }
)

export default appStore;