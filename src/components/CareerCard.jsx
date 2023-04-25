import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../assets/default-career-img.jpg'
import './CareerCard.css'

function CareerCard({ careerId, title, imgURL }) {
    if (!imgURL) imgURL = defaultImg

    return (
        <Link id='career-card' to={`/careers/${careerId}`}>
            <img src={imgURL} alt="" />
            <h2>{title}</h2>
        </Link>
    )
}

export default CareerCard