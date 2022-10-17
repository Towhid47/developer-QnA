import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
   {
    path : '/',
    element : <Root></Root>,
    children : [
        { path: '/' , element: <Home></Home> , loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz') },
        { path: '/home' , element: <Home></Home> , loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz') },
        { path: '/topics' , element: <Topics></Topics> , loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz') },
        { path: '/statistics', element: <Statistics></Statistics>},
        { path: '/blog' , element: <Blog></Blog>},
        { path: '/quiz/:id' , element: <Quiz></Quiz> , loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`) }
    ]
   }
]);