import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[160px] max-w-[180px] rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:scale-105 transition-transform duration-200 cursor-pointer border border-gray-800">
      <img
        alt="movieCard"
        src={IMG_CDN + posterPath}
        className="w-full h-60 object-cover"
      />
    </div>
  )
}

export default MovieCard