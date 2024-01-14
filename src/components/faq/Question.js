import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import './Question.scss';

const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="container question --card">
        <div className="question-title --flex-between">
            <h4 className='--text-p --fw-bold'>Can I learn React</h4>
            <button className='question-icon'>
                {showAnswer ? (
                    <FaMinus color='red' />
                ): 
                (
                    <FaPlus color='#1f93ff' />
                )}
            </button>
        </div>    
        <div className="question-answer">
            {showAnswer && <p className='--text-sm --py'>
                    This is the answer
                </p>}
        </div>
    </div>
  )
}

export default Question;
