import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Quiz = ({quiz}) => {
const {id,name,logo,total}=quiz;
    return (
        <div className=' bg-slate-800 shadow-xl rounded'>
            <img className=' p-10 w-30 h-50 mx-auto' src={logo} alt="" />
             <div className="p-5">
              <h2 className=' text-white uppercase font-bold mb-5'>{name}</h2>
              <Link className=' flex uppercase font-semibold  text-blue-700 ' to='/'>
                Read More
                 <ArrowRightIcon  className=" ml-2 h-6 w-6 text-blue-500"/>
              </Link>
             </div>
        </div>
    );
};

export default Quiz;