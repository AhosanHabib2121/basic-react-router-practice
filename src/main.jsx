import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Meals from './components/meals/Meals.jsx'
import MealDetail from './components/mealDetail/MealDetail.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
    children: [
      {
        path: "/meals",
        loader:() => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a'),
        element: <Meals></Meals>
      },
      {
        path: "/mealDetail/:mealId",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <MealDetail></MealDetail>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)