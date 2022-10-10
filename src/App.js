import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root'; 
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';

function App() {
  const router= createBrowserRouter([
    {
    path:'/',
    element:<Root />,
    loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
    {path:'/',element:<Home/>},
    {path:'/home',element:<Home/>},
    {path:'/quiz',element:<Quiz/>},
    {path:'/statistics',element:<Statistics/>},
    {path:'/blog',element:<Blog/>}
   ]
  }
  ]);
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
