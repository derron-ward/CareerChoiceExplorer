import React from 'react'
import { Link } from 'react-router-dom'
import blankProfile from '../assets/blank-profile.png'
import './Navbar.css'

function Navbar({ avatar = blankProfile}) {
  return (
    <div id='navbar'>
        <Link id="navbar-home" to="/">Career Choice Explorer</Link>
        <div id='links'>
            <Link className="navbar-link" to="/questionnaire">Questionnaire</Link>
            <Link className="navbar-link" to="/salaries">Salaries</Link>
            <Link className="navbar-link" to="/careers">Careers</Link>
            <Link className="navbar-link" to="/events">Events</Link>
            <Link to="/profile">
                <img id='profile-img' src={avatar} alt="Profile" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar