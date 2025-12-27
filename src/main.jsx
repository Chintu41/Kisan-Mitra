import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyDashboard from './pages/MyDashboard'
import App from './App.jsx'
import AppwriteAccount from './Appwrite/Account.Services'
import { APPWRITE_ENDPOINT } from './Utils/Appwrite/constants'
import PublicRoute from './Routes/PublicRoute'
import LoginSelection from './pages/LoginSelection'
import RoleSelector from './pages/RoleSelector'
import PrivateRoute from './Routes/PrivateRoute'

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
      // element:<PrivateRoute><MyDashboard/></PrivateRoute>
      element:<MyDashboard/>
     },
     {
      path:"/loginSelection",
      element:<LoginSelection/>
     },
     {
      path:"/roleSelector",
      element:<RoleSelector/>
     }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
