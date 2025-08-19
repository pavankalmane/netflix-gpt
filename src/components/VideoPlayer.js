import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoPlayer = ({ videoId }) => {
  useMovieTrailer(videoId);
  const trailerId = useSelector((store) => store?.movies?.trailer);
  return (
    <div>
      <iframe
        className="w-full h-[500px] aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId + "?autoplay=1&mute=1"} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
