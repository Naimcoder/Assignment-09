import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Quesiton/Question';

const Quiz = () => {
   const quized = useLoaderData().data;
   const question= (quized.questions);
    return (
    <div>
      <img className='w-20 mx-auto my-7' src={quized.logo} alt="" />
      <h2 className='text-3xl text-gray-900 font-bold text-center'>Questions Of {quized.name}</h2>
       {question.map(question=><Question key={question.id} question={question}></Question>)}
    </div>
    );
};

export default Quiz;