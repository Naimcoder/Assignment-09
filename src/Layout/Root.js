import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

 export const CatagoryContext= createContext([])
const Root = () => {
 const catagoryQuizs= useLoaderData().data;
    return (
       <CatagoryContext.Provider value={catagoryQuizs}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
       </CatagoryContext.Provider>
    );
};

export default Root;