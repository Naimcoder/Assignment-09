import React, { useContext } from 'react';
import { CatagoryContext } from '../../Layout/Root';
import Card from '../Card/Card';
import Head from '../Head/Head';


const Home = () => {
  const catagoryQuiz= useContext(CatagoryContext)
  console.log(catagoryQuiz)
    return (
        <div className=''>
            <Head></Head>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4 w-10/12 mx-auto my-20'>
                   {catagoryQuiz.map(quiz=><Card key={quiz.id} quizs={quiz}></Card>)}
            </div>
          
        </div>
    );
};

export default Home;