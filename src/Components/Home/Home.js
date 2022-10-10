import React, { useContext } from 'react';
import { CatagoryContext } from '../../Layout/Root';
import Quiz from '../Quiz/Quiz';


const Home = () => {
  const catagoryQuiz= useContext(CatagoryContext)
  console.log(catagoryQuiz)
    return (
        <div className='grid grid-cols-2 gap-4 w-10/12 mx-auto my-20'>
            {catagoryQuiz.map(quiz=><Quiz key={quiz.id} quiz={quiz}></Quiz>)}
        </div>
    );
};

export default Home;