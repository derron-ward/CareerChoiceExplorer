import React, { useState, useEffect } from 'react'
import SalaryCard from '../components/SalaryCard'
import axios from 'axios'
import './Salaries.css'

function createCards(salaries, medianComp) {
    const result = []
    for (let i = 0; i < salaries.length; ++i) {
        result.push(<SalaryCard company={salaries[i].company} jobTitle={salaries[i].title} salary={salaries[i].comp} medianSalary={medianComp} />)
    }
    return result
}

function Salaries() {
    const [isLoading, setLoading] = useState(true)
    const [salaries, setSalaries] = useState()
    let medianComp, lowComp, highComp

    useEffect(() => {
        axios.get('http://localhost:3000/salaries')
            .then(res => {
                // get the median comp
                let total = 0
                for (let i = 0; i < res.data.length; ++i) {
                    total += res.data[i].comp
                }
                medianComp = Math.trunc(total / res.data.length)

                setSalaries(res.data)
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
                {createCards(salaries)}
            </div>
        </div>
    )
}

export default Salaries