import React from 'react';
import { FaBook } from "react-icons/fa";
import Question from './Question';
import { questions } from './data';

const Faq = () => {
  return (
    <section className='faq-sec'>
        <div className="container faq">
            <div className="title --center-all">
                <FaBook size={30} color='orangered' />
                <h2 className='--mb2'>FAQS</h2>
                <p className='--text-small'>
                    Fréquemment traduit en français par Foire Aux Questions, l'acronyme FAQ fait référence à l'expression anglaise Frequently Asked Questions. 
                    Il s'agit en fait d'un support d'information qui regroupe, sur une même page Web, les questions les plus souvent posées par des internautes.
                </p>
            </div>
            <div className="questions --center-all">
                {questions.map(question => (
                    <Question key={question.id} title={question.title} answer={question.answer} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Faq
