import React from 'react'
import './EventCard.css'

function EventCard({ Event, Date, Sector, Description }) {
    
    return (
      <div id='Event-card'>
          <h4>{Event}<br /><span>{Date}</span></h4>
          <h4 className={salary < medianSalary ? 'danger' : 'success'}>${typeof salary == 'number' ? salary.toLocaleString() : salary}</h4>
      </div>
    )
}

export default EventCard