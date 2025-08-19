import { createSlice} from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlaying = action.payload;
        },
         addTrailerMovies:(state,action)=>{
            state.trailer = action.payload;
        }


    }
})

export const {addNowPlayingMovies,addTrailerMovies} = moviesSlice.actions;
export default moviesSlice.reducer;