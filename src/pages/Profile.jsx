import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CareerCard from '../components/CareerCard'
import './Profile.css'

function createCards(careers) {
    const result = []
    for (let i = 0; i < careers.length; ++i) {
        result.push(<CareerCard careerId={careers[i]._id} imgURL={careers[i].imgURL} title={careers[i].title}  />)
    }
    return result
}

function Profile() {
    const [isLoading, setLoading] = useState(true)
    const [careers, setCareers] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/careers')
            .then(res => {
                const data = res.data
                if (data.length > 8) {
                    data.splice(6)
                }
                console.log('got data')

                setCareers(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        console.log('loading')
        return <div></div>
    }
    return (
        <div id="profile-page">
            <h1 className='page-heading'>Change Password</h1>
            <form action='#' method='POST' id='change-passwd'>
                <div className='form-field'>
                    <label for="old-passwd">Old Password</label>
                    <input type="text" />
                </div>
                <div className='form-field'>
                    <label for="new-passwd">New Password</label>
                    <input type="text" />
                </div>
                <div className='form-field'>
                    <label for="new-passwd-confirm">Confirm New Password</label>
                    <input type="text" />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <h1 className='page-heading'>Your Careers</h1>
            <div className='careers-grid'>
                { createCards(careers) }
            </div>
        </div>
    )
}



export default Profile