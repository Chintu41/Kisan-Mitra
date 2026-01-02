import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AppwriteAccount from "../Appwrite/Account.Services";

function PublicRoute({ children }) {
  const [user, setUser] = useState(null);
  const [isCheckingUser, setIsCheckingUser] = useState(true);

  const appwriteAccount = new AppwriteAccount();

  useEffect(() => {
    async function fetchUser() {
      try {
        const appwriteUser = await appwriteAccount.getAppwriteUser();
        setUser(appwriteUser);
      } catch (error) {
        setUser(null);
      } finally {
        setIsCheckingUser(false);
      }
    }
    fetchUser();
  }, []);

  if (isCheckingUser) {
    return <div>Checking authentication...</div>;
  }

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default PublicRoute;
