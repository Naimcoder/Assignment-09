import React, { useContext } from 'react';
import { CatagoryContext } from '../../Layout/Root';
import Head from '../Head/Head';
import Quiz from '../Quiz/Quiz';


const Home = () => {
  const catagoryQuiz= useContext(CatagoryContext)
  console.log(catagoryQuiz)
    return (
        <div className=''>
            <Head></Head>
            <div className='grid grid-cols-2 gap-4 w-10/12 mx-auto my-20'>
                   {catagoryQuiz.map(quiz=><Quiz key={quiz.id} quiz={quiz}></Quiz>)}
            </div>
          
        </div>
    );
};

export default Home;