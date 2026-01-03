import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import App from './App.jsx'
import AppwriteAccount from './Appwrite/Account.Services'
import { APPWRITE_ENDPOINT } from './Utils/Appwrite/constants'
import PublicRoute from './Routes/PublicRoute'
import LoginSelection from './pages/LoginSelection'

console.log(typeof APPWRITE_ENDPOINT)

//instance
const appwriteAccount=new AppwriteAccount()
const user= await appwriteAccount.getAppwriteUser()
console.log(user)

const router=createBrowserRouter([
  { path: "/",
     element: <App/> 
   },

  { path: "/register",
     element: <SignupPage/> 
   },

  { path: "/login",
     element: <PublicRoute><LoginPage/></PublicRoute>
   },
     {
      path:"/dashboard",
      element:<MyDashboard/>
     },
     {
      path:"/loginSelection",
      element:<LoginSelection/>
     }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
