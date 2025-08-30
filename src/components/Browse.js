import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div className="min-h-screen w-full  overflow-y-auto scrollbar-hide">
            <Header />
            {showGptSearch?<GptSearch/>:
            <><MainContainer />
            <SecondaryContainer /></>}
        </div>
    );
}

export default Browse;