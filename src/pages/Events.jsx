import React, { useState, useEffect } from 'react'
import EventCard from '../components/EventCard'
import axios from 'axios'
import './Events.css'

function createCards(news) {
    const result = []
    for (let i = 0; i < news.length; ++i) {
        result.push(<EventCard title={news[i].title} snippet={news[i].snippet} url={news[i].url} />)
    }
    return result
}

function Events() {
    const [isLoading, setLoading] = useState(true)
    const [news, setEvents] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/events')
            .then(res => {
                setEvents(res.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        console.log('loading events')
        return <div></div>
    }

    return (
        <div id='news-and-events-page'>
            <h1 className='page-heading'>News & Events</h1>
            <div id='event-grid'>
                { createCards(news) }
            </div>
        </div>
    )
}

export default Events