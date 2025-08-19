import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute top-10 left-10 z-10 text-white' >
      <h1 className="text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" bg-gray-300 bg-opacity-50 font-bold  p-4 px-16 text-lg rounded-lg m-2">▶ Play</button>
        <button className="bg-gray-300 bg-opacity-50 p-4 px-10 text-lg rounded-lg m-2">ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle