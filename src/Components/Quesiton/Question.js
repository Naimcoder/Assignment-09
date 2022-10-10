import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Question = ({pd}) => {
    const {correctAnswer}=pd;
    const handlerCheck=(pd)=>{
        if( pd === correctAnswer){
        //   alert(pd)
          toast('hello')
        }else{
            toast.warning('no right')
        }
    }
    
    return (
        <div className='  mx-auto bg-slate-50 p-5 rounded-lg text-base  my-5 w-8/12 drop-shadow-lg 	'>
            <h3 className='text-center pt-3 pb-5 font-bold sm:text-base'>
               {pd.question}
            </h3>
            <div className='grid grid-cols-2 gap-3'>
                {pd.options.map(option=>

                <label  key={option} htmlFor={option} className='ml-3 border p-3 m-2 flex bg-white rounded'>
                <input onChange={()=>{handlerCheck(option)}} type="radio" name="radio-6" className="radio checked:bg-blue-500" /><p className='ml-4'>{option}</p>
               
                </label>

                )}
            </div>
    
        </div>
    );
};

export default Question;
