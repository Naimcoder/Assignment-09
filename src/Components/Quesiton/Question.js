import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Swal from 'sweetalert2'


const Question = ({question}) => {
    const {correctAnswer}=question;
    const handlerCheck=(question)=>{
        if( question === correctAnswer){
    //    alert('currect answer')
    Swal.fire(
     'Correct Answer !',
     'Good job!',
     'success'
      )
        }else{
    
      Swal.fire({
      icon: 'error',
      title: 'wrong...',
      text: 'Your Question is wrong!',
     })
        }
    }
    const HendlerView = ()=>{ 
     Swal.fire("CorrectAnswer:-" + "<br>"+ correctAnswer)
    }
    
    return (
        <div className='  mx-auto bg-slate-50 p-5 rounded-lg text-base  my-5 w-8/12 drop-shadow-lg'>
           
            <h3 className=' flex  justify-between text-center pt-3 pb-5 font-bold sm:text-base'>
               {question.question}
                <EyeIcon onClick={HendlerView} className=" right-0 hover:text-black ml-2 h-6 w-6 text-blue-500"/>
            </h3>
            <div className='grid md:grid-cols-2 gap-3'>
                {question.options.map(option=>

                <label  key={option} htmlFor={option} className='ml-3  p-3 m-2 flex bg-white rounded'>
                <input onChange={()=>{handlerCheck(option)}} type="radio" name="radio-6" className="radio checked:bg-blue-500" /><p className='ml-4'>{option}</p>
               
                </label>

                )}
            </div>
    
        </div>
    );
};

export default Question;
