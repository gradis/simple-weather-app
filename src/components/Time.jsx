import React from 'react'
import Monthes from './Monthes'

function Time({ value }) {
  let date = `${value.getDate()}`;
  let hours = value.getHours();
  let minutes = (value.getMinutes() < 10 ? '0' : '') + value.getMinutes()
  let time = `${hours} : ${minutes}`;

  return (
    <div className="absolute p-4 px-6 font-bold text-2xl flex flex-auto justify-between align-center w-screen transition-opacity duration-1000 ease-in-out" style={{ minWidth: "320px" }}>
      <div className="border-white border-solid border-2 rounded-xl px-4 py-2" style={{ minWidth: "max-conent" }}>{date}, <Monthes month={value.getMonth()} /></div>
      <div className="border-white border-solid border-2 rounded-xl px-4 py-2" style={{ minWidth: "max-conent" }}>{time}</div>
    </div>
  )
}

export default Time