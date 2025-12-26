import { useEffect, useState } from "react";
import AppwriteAccount from "./Appwrite/Account.Services";
import { useNavigate, Link } from "react-router";
import Herosection from "./pages/Herosection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const appwriteAccount = new AppwriteAccount();
  const navigate = useNavigate();

  async function checkUserSession() {
    const user = await appwriteAccount.getAppwriteUser();
    if (!user) {
      console.log("user session not found! at home route");
      navigate("/login");
    }
    return true;
  }

  useEffect(() => {
  // ComponentWillUnmount()
  console.log("loading...");  
  setTimeout(()=>{
    setIsLoading(false);
  },2000)  
}, []);//empty dependency
  //ComponentDidUpdate()
if(isLoading){
  return <h1>Loading....</h1>
}
  return (
    <>
    <Herosection/>
    </>
  );
}
export default App;
