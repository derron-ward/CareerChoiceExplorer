import React from 'react'
import './SalaryCard.css'

function SalaryCard({ company, jobTitle, salary, medianSalary }) {
    
    return (
      <div id='salary-card'>
          <h4>{company}<br /><span>{jobTitle}</span></h4>
          <h4 className={salary < medianSalary ? 'danger' : 'success'}>${typeof salary == 'number' ? salary.toLocaleString() : salary}</h4>
      </div>
    )
}

export default SalaryCard