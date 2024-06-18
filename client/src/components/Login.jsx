import { useState } from "react";
import { useClerk } from "@clerk/clerk-react"; 


function Login(){
    const { clerk } = useClerk();
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const [error , setError]= useState("")

    const handleSignin = async (e) => {
        e.preventDefault()
        try{
             await clerk.signIn.create({
                identifier: email , 
                password,
            })
        }
        catch(error){
            setError(error.message)
        }
    }    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 ">
           <form 
           onSubmit={handleSignin}
            className="bg-white p-8 rounded shadow-md w-90% md:w-[450px] h-[70vh] md:h-[64vh] flex flex-col justify-center "
           >
            <div className="bg-yellow-500 p-4 flex flex-column justify-center">
                <h2 className="text-black font-semibold ">
                    Movie blaze
                </h2>
            </div>
        
           <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                placeholder="enter your email"
                className="border border-black p-2 mt-6  w-full "
           /> 
           <br />
           <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="text" 
                placeholder="enter the password"
                className="border border-black  p-2 mb-8 w-full"
            />
           <br />
           <div className="p-1 relative bottom-14 flex flex-col items-end">
                <p className="text-blue-700 underline cursor-pointer">  
                    Create Account
                </p>
            </div>
           <button
                type="submit"
                className="border border-black mt-0 p-2 w-full bg-yellow-600 text-white"
           > 
                Login
            </button>
           </form>
        </div>
    )
}

export default Login;