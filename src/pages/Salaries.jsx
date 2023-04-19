import React from 'react'
import { Link, Form } from 'react-router-dom'
import SalaryCard from '../components/SalaryCard'
import './Salaries.css'

function Salaries() {
    // load the salary information

    return (
        <div id='salaries-page'>
            <h1>Salaries</h1>
            <div id='salaries-main-card'>
                <div id='earners'>
                    <h4><span style={{fontSize: '1.5rem'}} className='success'>${'200,000'}</span><br />Top 10% Earners</h4>
                    <h4><span style={{fontSize: '1.5rem'}} className='danger'>${'40,000'}</span><br />Bottom 10% Earners</h4>
                </div>
                <h3><span style={{fontSize: '2rem'}} className='success'>${'100,000'}</span><br />Median Compensation</h3>
                <div id='salaries-btns'>
                    <Link>Add Your Salary</Link>
                    <Link>Browse Careers</Link>
                </div>
            </div>
            <div id='salaries-grid'>
                {/* salary cards go here */}
            </div>
        </div>
    )
}

export default Salaries