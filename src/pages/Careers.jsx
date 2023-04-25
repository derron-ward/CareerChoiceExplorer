import React, { useState, useEffect } from 'react'
import CareerCard from '../components/CareerCard'
import axios from 'axios'
import './Careers.css'

function createCards(careers) {
    const result = []
    for (let i = 0; i < careers.length; ++i) {
        result.push(<CareerCard careerId={careers[i]._id} imgURL={careers[i].imgURL} title={careers[i].title}  />)
    }
    return result
}

function Careers() {
    const [isLoading, setLoading] = useState(true)
    const [careers, setCareers] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/careers')
            .then(res => {
                setCareers(res.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        console.log('loading')
        return <div></div>
    }

  return (
    <div id='careers-page'>
        <h1>Careers</h1>
        <div id='careers-grid'>
            {createCards(careers)}
        </div>
    </div>
  )
}

export default Careers