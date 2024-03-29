import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HiddenGem from './pages/HiddenGem.jsx';
import FoodTrucks from './pages/FoodTrucks.jsx';
import Restaurant from './pages/Restaurant.jsx';
import SanAntonio from './pages/SanAntonio.jsx';
import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RecommendationPage from './pages/Recommendations';
// import SingleThought from './pages/SingleThought';


import Aboutus from './pages/AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/hiddenGem',
        element: <HiddenGem />
      },
      {
        path: '/foodTrucks',
        element: <FoodTrucks />
      },
      {
        path: '/restaurants',
        element: <Restaurant />
      },
      {
        path: '/aboutus',
        element: <Aboutus />
      },
      {
        path: '/sanAntonio',
        element: <SanAntonio />
      },
      {
        path: '/recommendations',
        element: <RecommendationPage />
      },
      // {
      //   path: '/thoughts/:thoughtId',
      //   element: <SingleThought />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
