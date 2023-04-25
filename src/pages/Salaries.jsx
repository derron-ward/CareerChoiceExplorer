import React from 'react'
import SalaryCard from '../components/SalaryCard'
import axios from 'axios'
import './Salaries.css'

function getMedianComp(careers) {
    let totalComp = 0
    careers.foreach(career => {
        totalComp += career.comp
    })
    return totalComp / careers.length
}

function loadCards(careers) {
    const result = []
    const medianComp = getMedianComp(careers)
    careers.foreach(career => {
        result.push(<SalaryCard company={career.Career} jobTitle={career.Injustry} salary={career.SalaryMid} medianSalary={100000} />)
    })
    return result
}

function Salaries() {
    // load the salary information
    let cards
    console.log('Loading cards')
    axios.get('https://cce-api.onrender.com/careers')
        .then((res) => {
            cards = loadCards(res)
            console.log(res)
        })
        .catch((err) => {
            console.error('Error fetching from api')
        })

    return (
        <div id='salaries-page'>
            <h1>Salaries</h1>
            <div id='salaries-main-card'>
                <div className='earner'>
                    <h4><span style={{fontSize: '1.5rem'}} className='success'>${'200,000'}</span><br />Top 10% Earners</h4>
                </div>
                <h3><span style={{fontSize: '2rem'}} className='success'>${'100,000'}</span><br />Median Compensation</h3>
                <div className='earner'>
                    <h4><span style={{fontSize: '1.5rem'}} className='danger'>${'40,000'}</span><br />Bottom 10% Earners</h4>
                </div>
            </div>
            <div id='salaries-grid'>
                
            </div>
        </div>
    )
}

export default Salaries