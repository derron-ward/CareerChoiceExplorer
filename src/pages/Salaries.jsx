import React, { useState } from 'react'
import { Link, Form } from 'react-router-dom'
import SalaryCard from '../components/SalaryCard'
import './Salaries.css'

const medianSalary = 300000
const salaries = [
    {
        "company": 'Google',
        "jobTitle": 'Software Engineer',
        "salary": 300000
    },
    {
        "company": 'Netflix',
        "jobTitle": 'Software Engineer',
        "salary": 580000
    },
    {
        "company": 'Uber',
        "jobTitle": 'Software Engineer',
        "salary": 465000
    },
    {
        "company": 'Airbnb',
        "jobTitle": 'Software Engineer',
        "salary": 428500
    },
    {
        "company": 'Robinhood',
        "jobTitle": 'Software Engineer',
        "salary": 258000
    }
]

function loadCards(jobs) {
    const result = []
    jobs.forEach(job => {
        result.push(<SalaryCard company={job.company} jobTitle={job.jobTitle} salary={job.salary} medianSalary={medianSalary} />)
    })
    return result
}

function filterSalariesUp(medianSalary, jobs) {
    jobs.forEach((job, i) => {
        if (job.salary < medianSalary) jobs.splice(i, 1)
    })
    return jobs
}
function filterSalariesDown(medianSalary, jobs) {
    jobs.forEach((job, i) => {
        if (job.salary >= medianSalary) jobs.splice(i, 1)
    })
    return jobs
}

function Salaries() {
    // load the salary information
    const [jobs, setJobs] = useState(salaries)

    return (
        <div id='salaries-page'>
            <h1>Salaries</h1>
            <div id='salaries-main-card'>
                <div className='earner'>
                    <h4><span style={{fontSize: '1.5rem'}} className='success'>${'200,000'}</span><br />Top 10% Earners</h4>
                    <button onClick={() => {
                        setJobs(filterSalariesUp(medianSalary, jobs))
                    }}>View Below Avg.</button>
                </div>
                <h3><span style={{fontSize: '2rem'}} className='success'>${'100,000'}</span><br />Median Compensation</h3>
                <div className='earner'>
                    <h4><span style={{fontSize: '1.5rem'}} className='danger'>${'40,000'}</span><br />Bottom 10% Earners</h4>
                    <button onClick={() => {
                        setJobs(filterSalariesDown(medianSalary, jobs))
                    }}>View Below Avg.</button>
                </div>
            </div>
            <div id='salaries-grid'>
                {loadCards(jobs)}
            </div>
        </div>
    )
}

export default Salaries