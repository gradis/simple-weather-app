import React, { useState, useEffect } from 'react'
import Time from './Time'

const Header = () => {
  const [value, setValue] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  })



  return (
    <div className="will-change-auto animate__animated animate__fadeIn">
      <Time value={value} />
    </div>
  )
}

export default Header