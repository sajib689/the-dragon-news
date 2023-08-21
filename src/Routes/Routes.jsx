import Home from './../Pages/Home/Home';
import { createBrowserRouter } from "react-router-dom";
import Main from './Main';
import Category from '../Pages/Categories/Category';
import News from '../Shared/News/News';
import Login from '../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:3000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
          
        ]
    }
])

export default router