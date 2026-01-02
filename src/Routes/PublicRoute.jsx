import { useState ,useEffect} from "react";
import AppwriteAccount from "../Appwrite/Account.Services";
import { Navigate } from "react-router";

function PublicRoute(props){
    const {children}=props;
    const [user,setUser]=useState(null)
    const [isCheckingUser,setIsCheckingUser]=useState(true)

    const appwriteAccount=new AppwriteAccount();
    async function fetchUser(){
        try{
            const appwriteUser=await appwriteAccount.getAppwriteUser(); 
            setUser(appwriteUser)
        }catch(error){
            console.log(error.message)
        }
        finally{
            console.log("inside the finally-block")
            setIsCheckingUser(false)
        }
    }
    useEffect(()=>{
        fetchUser();
    },[])

    if(user){
        return(
            <Navigate to="/dashboard"/>
        )
    }

return children;
}
export default PublicRoute;