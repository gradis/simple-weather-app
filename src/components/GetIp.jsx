import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import axios from 'axios'

function GetIp() {
  const IP_API_URL = 'http://ip-api.com/json/?fields=city'

  const [adress, setAdress] = useState(null)

  useEffect(() => {
    axios.get(IP_API_URL)
      .then(response => {
        setAdress(response.data)
      })
  }, [IP_API_URL])


  if (adress == null) {
    return (
      <>
        <Weather city="Zhodzina" />
      </>
    )
  }
  else {
    let city = adress.city

    return (<div className="animate__animated animate__fadeIn">
      <Weather city={city} />
    </div>)
  }
}

export default GetIp