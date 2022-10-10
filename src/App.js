import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root';
import { Children } from 'react';

function App() {
  const router= createBrowserRouter([
    {
    path:'/',
    element:<Root />,
   children: [
    {path:'/'}
   ]
  }
  ])
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
