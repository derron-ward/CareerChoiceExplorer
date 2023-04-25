import React from 'react'
import './EventCard.css'

function EventCard({ title, snippet, url }) {
    // if the snippet is greater than 150 characters, shorten it
    // also add three continuation dots after text
    if (snippet.length > 150) {
        snippet = snippet.substring(0, 156)
        snippet += '...'
    }

  return (
    <div className='event-card'>
        <div>
            <h1>{title}</h1>
            <p>{snippet}</p>
        </div>
        <a href={url}>read more...</a>
    </div>
  )
}

export default EventCard