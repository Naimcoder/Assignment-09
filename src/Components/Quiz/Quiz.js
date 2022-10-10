import React from 'react';

const Quiz = ({quiz}) => {
const {id,name,logo,total}=quiz;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Quiz;