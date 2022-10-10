import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';

 export const CatagoryContext= createContext([])
const Root = () => {
 const catagoryQuizs= useLoaderData().data;
    return (
       <CatagoryContext.Provider value={catagoryQuizs}>
        <Header></Header>
        <Outlet></Outlet>
       </CatagoryContext.Provider>
    );
};

export default Root;