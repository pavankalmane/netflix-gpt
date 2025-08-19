import React from "react";
import { useSelector } from "react-redux";
import VideoPlayer from "./VideoPlayer";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlaying);

  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview,id } = mainMovie;
  return (
    <div className="relative">
      <VideoPlayer videoId ={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
