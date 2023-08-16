import { Navbar } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import Home from './../Pages/Home/Home';
import { createBrowserRouter } from "react-router-dom";
import Main from './Main';
import LeftNav from './../Shared/LeftNav/LeftNav';


const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/navbar',
                element: <Navbar></Navbar>
            },
            {
                path: '/header',
                element: <Header></Header>
            },
        ]
    }
])

export default router