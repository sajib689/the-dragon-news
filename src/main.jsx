import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProviders from './Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router}></RouterProvider>
   </AuthProviders>
  </React.StrictMode>,
)
