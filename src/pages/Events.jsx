import React, { useState, useEffect } from 'react'
import EventCard from '../components/EventCard'
import axios from 'axios'
import './Events.css'

function createCards(events) {
    const result = []
    for (let i = 0; i < events.size; ++i) {
        result.push(<EventCard title={events[i].title} snippet={events[i].snippet} url={events[i].url} />)
    }
    return result
}

function Events() {
    const [isLoading, setLoading] = useState(true)
    const [events, setEvents] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/events')
            .then(res => {
                setEvents(res.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div></div>
    }

    return (
        <div id='news-and-events-page'>
            <h1>News & Events</h1>
            <div id='event-grid'>
                { createCards(events) }
            </div>
        </div>
    )
}

export default Events