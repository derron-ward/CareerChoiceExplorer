import React from 'react'
import './Questionnaire.css'

function Questionnaire() {
  return (
    <div id='questionnaire-page'>
      <div id='left-section'>
        <h1> About this questionnaire</h1>
        <p id='description'>
            This questionnaire was designed to help us get a better understanding of your personality, work ethic,
            and interests. Each statement is a measure of how much you agree or disagree with a certain topic.
            There are no wrong answers and you can only select one answer choice per question. There is no time limit,
            however, do not ponder on a question for long as your instinctual feedback will be the most accurate in helping you find
            the career that is perfect for you.
        </p>
      </div>
      <div id='middle-section'>
        <span id='line'></span>
      </div>
      <div id='right-section'>
        <form id='qna' action='http://localhost:5173/industries'>
            <p className='questions'>1. I prefer to spend time alone to recharge my energy vs. being around people.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question1' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question1' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question1' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question1' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question1' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>2. I am more of a morning person than a night owl.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question2' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question2' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question2' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question2' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question2' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>3. I prefer to focus on the big picture vs. focusing on the details.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question3' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question3' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question3' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question3' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question3' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>4. I enjoy understanding people and their motivations.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question4' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question4' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question4' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question4' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question4' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>5. I prefer working alone.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question5' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question5' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question5' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question5' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question5' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>6. I am great at persuading others to support my ideas.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question6' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question6' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question6' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question6' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question6' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>7. I can sometimes be too detail-oriented.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question7' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question7' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question7' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question7' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question7' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>8. I enjoy taking things apart to understand how they work.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question8' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question8' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question8' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question8' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question8' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>9. I enjoy doing extensive research to get a thorough understanding of a topic.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question9' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question9' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question9' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question9' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question9' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <p className='questions'>10. My work must make a positive/helpful impact on others.</p>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question10' value='answerchoice1'    />
                    Strongly Agree
                </label>
                <label className='answer-group'> 
                    <input className='answers' type='radio' name='question10' value='answerchoice2'    />
                    Slightly Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question10' value='answerchoice3'    />
                    Agree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question10' value='answerchoice4'    />
                    Slightly Disagree
                </label>
                <label className='answer-group'>
                    <input className='answers' type='radio' name='question10' value='answerchoice4'    />
                    Strongly Disagree
                </label>
            <button id='submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Questionnaire