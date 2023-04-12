import React from 'react'
import './Questionnaire.css'

function Questionnaire() {
  return (
    <div id='questionnaire-page'>
      <div id='left-section'>
        <h1 id='question'>
          Question
        </h1>
        <p id='description'>
          Lorem Ipsum
        </p>
      </div>
      <div id='right-section'>
        <div id='progress-bar'>
          <div class='progress'>
            <div class="progress-done"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questionnaire