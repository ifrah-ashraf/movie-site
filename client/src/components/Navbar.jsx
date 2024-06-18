import {Link} from "react-router-dom"

function Navbar() {
  
 
  return (
    <header className="bg-yellow-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Movie Blaze</h1>
        <nav className="flex sm:justify-center space-x-5">
        <Link 
            to="/login"
            className="rounded-lg px-3 py-2 text-black-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="rounded-lg px-3 py-2 text-black-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
          SignUp
        </Link>
        </nav>
      </div>
      
    </header>
  )
}

export default Navbar;

//