import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import './Question.scss';

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="container question --card">
        <div className="question-title --flex-between">
            <h4 className='--text-p --fw-bold'>{title}</h4>
            <button className='question-icon' onClick={handleClick}>
                {showAnswer ? (
                    <FaMinus color='red' />
                ): 
                (
                    <FaPlus color='#1f93ff' />
                )}
            </button>
        </div>    
        <div className="question-answer">
            {showAnswer && <p className='--text-sm --py'>{answer}</p>}
        </div>
    </div>
  )
}

export default Question;
