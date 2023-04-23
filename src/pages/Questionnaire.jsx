import React from 'react'
import './Questionnaire.css'

function Questionnaire() {
  return (
    <div id='questionnaire-page'>
      <div id='left-section'>
        <p id='description'>
          Lorem Ipsum
        </p>
      </div>
      <div id='right-section'>
        <form id='qna'>
            <p>Question 1:</p>
                <label>
                    <input type='radio' value='answerchoice1'    />
                    Answer Choice 1
                </label>
                <label>
                    <input type='radio' value='answerchoice2'    />
                    Answer Choice 2
                </label>
                <label>
                    <input type='radio' value='answerchoice3'    />
                    Answer Choice 3
                </label>
                <label>
                    <input type='radio' value='answerchoice4'    />
                    Answer Choice 4
                </label>
            <p>Question 2:</p>
                <label>
                    <input type='radio' value='answerchoice1'    />
                    Answer Choice 1
                </label>
                <label>
                    <input type='radio' value='answerchoice2'    />
                    Answer Choice 2
                </label>
                <label>
                    <input type='radio' value='answerchoice3'    />
                    Answer Choice 3
                </label>
                <label>
                    <input type='radio' value='answerchoice4'    />
                    Answer Choice 4
                </label>
            <p>Question 3:</p>
                <label>
                    <input type='radio' value='answerchoice1'    />
                    Answer Choice 1
                </label>
                <label>
                    <input type='radio' value='answerchoice2'    />
                    Answer Choice 2
                </label>
                <label>
                    <input type='radio' value='answerchoice3'    />
                    Answer Choice 3
                </label>
                <label>
                    <input type='radio' value='answerchoice4'    />
                    Answer Choice 4
                </label>
            <p>Question 4:</p>
                <label>
                    <input type='radio' value='answerchoice1'    />
                    Answer Choice 1
                </label>
                <label>
                    <input type='radio' value='answerchoice2'    />
                    Answer Choice 2
                </label>
                <label>
                    <input type='radio' value='answerchoice3'    />
                    Answer Choice 3
                </label>
                <label>
                    <input type='radio' value='answerchoice4'    />
                    Answer Choice 4
                </label>
            <p>Question 5:</p>
                <label>
                    <input type='radio' value='answerchoice1'    />
                    Answer Choice 1
                </label>
                <label>
                    <input type='radio' value='answerchoice2'    />
                    Answer Choice 2
                </label>
                <label>
                    <input type='radio' value='answerchoice3'    />
                    Answer Choice 3
                </label>
                <label>
                    <input type='radio' value='answerchoice4'    />
                    Answer Choice 4
                </label>
        </form>
      </div>
    </div>
  )
}

export default Questionnaire