import React, { useState, useEffect } from 'react'
import SalaryCard from '../components/SalaryCard'
import axios from 'axios'
import './Salaries.css'

function createCards(careers) {
    const result = []
    for (let i = 0; i < careers.length; ++i) {
        result.push(<SalaryCard company={careers[i].Career} jobTitle={careers[i].Injustry} salary={careers[i].SalaryMid} medianSalary={100000} />)
    }
    return result
}

function Salaries() {
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
                {createCards(careers)}
            </div>
        </div>
    )
}

export default Salaries