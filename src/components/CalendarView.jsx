import React, { useState } from 'react'
import Calendar from 'react-calendar';
import '../css/CalendarView.css'

function CalendarView() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="text-xl">
      {/* <p className='text-center'>
        {date.toDateString()}
      </p> */}
      <Calendar className="flex items-center align-middle justify-center flex-col sm:w-screen md:w-full" onChange={setDate} value={date} locale="en-US" />
    </div>
  );
}

export default CalendarView