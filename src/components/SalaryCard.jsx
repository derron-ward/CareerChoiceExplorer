import React from 'react'
import './SalaryCard.css'

function SalaryCard({ company, locations, salary, medianSalary }) {
    if (Array.isArray(locations)) {
        if (locations.length > 2) {
            const extras = locations.length - 2
            console.log(`Extras: ${extras}`)
            locations.splice(2)
            locations = locations.join(', ') + `, +${extras}`
            console.log(locations)
        }
        else locations = locations.join(', ')
    }
    

    return (
      <div id='salary-card'>
          <h4>{company}<br /><span>{locations}</span></h4>
          <h4 className={salary < medianSalary ? 'danger' : 'success'}>${salary}</h4>
      </div>
    )
}

export default SalaryCard