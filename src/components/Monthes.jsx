import React from 'react'

function Monthes({ month }) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <>
      {monthNames[month]}
    </>
  )
}

export default Monthes