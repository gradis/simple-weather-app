import React from 'react'
import IMAGES from '../assets/Images';

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

const imageArray = Object.values(IMAGES);
const randomNumber = getRandom(imageArray.length)
const randomImageUrl = imageArray[randomNumber]

function Image() {
  return (
    <div className="absolute top-0 w-screen h-screen -z-1">
      <div className="relative">
        <div className="bg-black/40 h-screen absolute z-10 w-full"></div>
        <img className="blur-sm w-screen h-screen z-1 object-cover" src={randomImageUrl} alt="Random from Unsplash" />
      </div>
    </div>
  )
}

export default Image