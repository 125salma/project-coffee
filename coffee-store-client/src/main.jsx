import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddsCoffee from './components/AddsCoffee.jsx';
import UpdatesCoffee from './components/UpdatesCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Main from './components/Main.jsx';
import SingleCoffee from './components/SingleCoffee.jsx';
import PrivateRoute from './providers/PrivateRoute.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ContactUser from './components/ContactUser.jsx';
const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><App></App></PrivateRoute>,
        loader: () => fetch('https://coffee-store-server-eight-tau.vercel.app/coffee')
      },
      {
        path: "/addCoffee",
        element: <AddsCoffee></AddsCoffee>
      },
      {
        path: "/singleCoffee/:id",
        element: <SingleCoffee></SingleCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-eight-tau.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdatesCoffee></UpdatesCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-eight-tau.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-eight-tau.vercel.app/user')
      },
      {
        path: '/contacts',
        element: <ContactUser></ContactUser>,
        loader:() => fetch('https://coffee-store-server-eight-tau.vercel.app/contact')
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
