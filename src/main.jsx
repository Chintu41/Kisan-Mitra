import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import App from './App.jsx'
import PublicRoute from './Routes/PublicRoute'
import LoginSelection from './pages/LoginSelection'
<<<<<<< HEAD
import RoleSelector from './pages/RoleSelector'
import PrivateRoute from './Routes/PrivateRoute'
=======
import DoctorDashboard from './pages/Dasboards/DoctorDashboard/DoctorDashboard'
import FarmerDashboard from './pages/Dasboards/FarmerDashboard/FarmerDashboard'
import Herosection from './pages/Herosection'

console.log(typeof APPWRITE_ENDPOINT)

//instance
const appwriteAccount=new AppwriteAccount()
const user= await appwriteAccount.getAppwriteUser()
console.log(user)
>>>>>>> 14a353e70da7ddc469c4933bb4cc6a7bac6efedd

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
<<<<<<< HEAD
      path:"/dashboard",
      element:<PrivateRoute><MyDashboard/></PrivateRoute>
=======
      path:"/farmer",
      element:<FarmerDashboard/>
     },
     {
      path:"/herosection",
      element:<Herosection/>
>>>>>>> 14a353e70da7ddc469c4933bb4cc6a7bac6efedd
     },
     {
      path:"/loginSelection",
      element:<LoginSelection/>
     },
     {
<<<<<<< HEAD
      path:"/roleSelector",
      element:<RoleSelector/>
=======
      path:"/doctorDashboard",
      element:<DoctorDashboard/>
>>>>>>> 14a353e70da7ddc469c4933bb4cc6a7bac6efedd
     }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
