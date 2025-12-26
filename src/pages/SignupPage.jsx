import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router"
import { useState } from "react"
import AppwriteAccount from "../Appwrite/Account.Services"

 function SignupPage() {

   const navigate = useNavigate()
   const appwriteAccount = new AppwriteAccount()

   const [fullname, setFullname] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   function handleNavigatelogin(){
      navigate("/login")
   }

   async function handleRegister(){
     const result = await appwriteAccount.createAppwriteAccount(email, password, fullname)
     console.log(result)
     if(result?.status){
      navigate("/login")
     }
   }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register to your account</CardTitle>
        <CardDescription>
          Enter your details register to your account
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={handleNavigatelogin}>Log In </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="e.g.,Chintu"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password"
               type="password"
               placeholder="********"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={handleRegister} className="w-full">
          Register       
           </Button>
        <Button variant="outline" className="w-full">
          Reister with Google
        </Button>
      </CardFooter>
    </Card>
        </div>
  )
}
export default SignupPage