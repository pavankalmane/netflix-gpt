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
        addPopularMovies:(state,action)=>{
            state.popular = action.payload;
        },
         addTopRatedMovies:(state,action)=>{
            state.topRated = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcoming = action.payload;
        },
         addTrailerMovies:(state,action)=>{
            state.trailer = action.payload;
        }


    }
})

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrailerMovies} = moviesSlice.actions;
export default moviesSlice.reducer;