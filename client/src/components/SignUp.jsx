import { useState } from "react"


function SignUp() {
   
    const [username , setUserName]= useState("")
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address , setAddress] = useState("")
    const [ error, setError] = useState(null);
    const [file , setFile] = useState(null)

    const handleSignUp = async (e) => {
        e.preventDefault()
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
    
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
    
        if (res.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      };

    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300 ">
            <form encType="multipart/formdata"
                onSubmit={handleSignUp}
                className="bg-white p-8 rounded shadow-xl w-90% md:w-[500px] h-[70vh] md:h-[75vh] flex flex-col justify-center space-y-10 "
            >
                <div className="bg-yellow-400 p-4  mb-12 flex flex-column justify-center">
                    <h2 className="text-black font-semibold ">
                        Movie blaze
                    </h2>
                </div>
                <div className="relative bottom-20 space-y-4">
                {/* <input
                    type="text"
                    placeholder="enter the username"
                    className="border border-black p-2 mt-6  w-full"

                    value={username}
                    onChange={(e)=> {
                        setUsername(e.target.value)
                        
                    }}
                /> */}
                <br />
                <input
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}

                    type="text"
                    placeholder="enter your username"
                    className="border border-black  p-2 mb-8 w-full"
                />
                <br/>
                <input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                    type="email"
                    placeholder="enter your email id"
                    className="border border-black  p-2 mb-8 w-full"
                />
                <br />
                <input

                    type="password"
                    placeholder="enter the password"
                    className="border border-black  p-2 mb-8 w-full"

                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <input
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}

                    type="text"
                    placeholder="enter the address"
                    className="border border-black  p-2 mb-8 w-full"
                />
                </div>
                <input
                    onChange={handleFileChange}
                    type="file"
                    placeholder="enter the address"
                    className="border border-black  p-2 mb-8 w-full"
                />

                <button
                    type="submit"
                    className="border  border-black p-2 w-full bg-yellow-600 text-white custom-shadow-button"
                >
                    SignUp
                </button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}


export default SignUp