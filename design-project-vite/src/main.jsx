import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import routes from './routes/route.jsx'

createRoot(root).render(<RouterProvider router={routes}/>)
