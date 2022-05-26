import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather({ city }) {
  const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=5b1fb7e36ed14faca5393327222505&q=${city}&aqi=no`

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios.get(WEATHER_API_URL)
      .then(response => {
        setWeather(response.data)
      })
  }, [WEATHER_API_URL])

  if (weather) {
    return (
      <div className="flex items-center justify-center flex-col">
        <div className="font-bold text-4xl lg:text-5xl xl:text-6xl uppercase transition-all duration-300">{weather.location.name}</div>
        <div className="font-bold text-6xl lg:text-7xl xl:text-8xl uppercase transition-all duration-300">{weather.current.temp_c}&deg; c</div>
        <p className="text-sm my-3">Condition: {weather.current.condition.text}</p>
      </div>
    )
  }

  return (
    <div></div>
  )
}

export default Weather