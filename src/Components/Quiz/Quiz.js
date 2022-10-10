import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
const {id,name,logo,total}=quiz;
    return (
        <div className=' bg-slate-800 shadow-xl rounded'>
            <img className=' p-10 w-30 h-50 mx-auto' src={logo} alt="" />
             <div className="p-5">
              <h2 className=' text-white uppercase font-bold'>{name}</h2>
              <Link to='/'>
                <button className='  uppercase font-semibold  text-blue-700'>Read More</button>
              </Link>
             </div>
        </div>
    );
};

export default Quiz;