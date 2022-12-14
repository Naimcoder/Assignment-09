import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({quizs}) => {
    const {name,id,logo,total}=quizs;
    return (
          <div className=' bg-slate-800 shadow-xl rounded'>
            <img className=' p-10 w-30 h-50 mx-auto' src={logo} alt="" />
             <div className="p-5">
              <h2 className=' text-white uppercase font-bold mb-5'>{name}</h2>
              <h5 className=' text-yellow-50 font-medium py-2'>Total Quiz: {total}</h5>
               <Link
              to={`/quiz/${id}`}
              className="inline-flex uppercase items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Read more
                 <ArrowRightIcon className="hover:text-white ml-2 h-6 w-6 text-blue-500"/>
            </Link>
             </div>
        </div>
    );
};

export default Card;