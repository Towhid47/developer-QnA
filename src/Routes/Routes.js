import { Button } from "react-bootstrap";
import { createBrowserRouter, Link } from "react-router-dom";
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
        { path: '/statistics', element: <Statistics></Statistics> ,  loader: () => fetch('https://openapi.programming-hero.com/api/quiz')},
        { path: '/blog' , element: <Blog></Blog>},
        { path: '/quiz/:id' , element: <Quiz></Quiz> , loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`) },
         
        { path: '*' , 
          element: <div className="text-center m-auto">
                    <h3 className="fs-1">Oops!! An Error Occured. <span className="text-danger">404!</span></h3>
                  <div className="mt-5"><h3 className="fs-3 text-danger">The page you're looking for is not Found.</h3> </div>
                   <div className="mt-5"><Link to='/Home'><Button>Let's Go back To the Home Page</Button></Link> </div>
                   </div> }
    ]
   }
]);