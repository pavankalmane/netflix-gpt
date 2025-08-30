import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="mb-8 px-8">
            <h2 className="text-2xl font-bold text-white mb-4 pl-2">{title}</h2>
            <div className="flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pb-2">
                {Array.isArray(movies) && movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
