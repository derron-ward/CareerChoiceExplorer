import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './Career.css'

function Career() {
    const { careerId } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [career, setCareer] = useState()
    console.log(`Career ID: ${careerId}`)

    useEffect(() => {
        axios.get(`http://localhost:3000/careers/${careerId}`, {
            params: {
                id: careerId
            }
        }).then(res => {
            console.log(res.data)
            setCareer(res.data)
            setLoading(false)
        })
    }, [])

    if (isLoading) {
        console.log('loading')
        return <div></div>
    }

  return (
    <div id='career-page'>
        <img src={career.imgURL} alt="" />
        <div className='career-content'>
            <h1>{career.title}</h1>
            <div>
                <h2>${career.avgSalary.toLocaleString()}<br /><span>Median Compensation</span></h2>
                <a href={career.jobsURL} target='_blank'>View Jobs</a>
            </div>
            <p>{career.description}</p>
        </div>
    </div>
  )
}

export default Career