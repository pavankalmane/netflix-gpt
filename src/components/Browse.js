import Header from "./Header";
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse=()=>{
    useNowPlayingMovies();
    return(<div className="fixed z-20 top-0 left-0 w-full z-50" >
       <Header />
       {/*
       Main container
       -video player
       -video title
       Secondary container
       -MovieList *n
       -cards *n
       */}
       <MainContainer />
       <SecondaryContainer />
    </div>)
}

export default Browse;