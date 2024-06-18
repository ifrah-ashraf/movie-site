import { Route,Routes } from 'react-router-dom'
import './index.css' 
import './custom.css' 
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'  
import Landing from './components/Landing'
import {SignedIn , RedirectToSignIn, SignedOut } from '@clerk/clerk-react'

function App() {
  return(
    <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />

          <Route path="/landing" element={
          <SignedIn>
            <Landing/>
          </SignedIn>
        } />
        
          <Route path="/login" element={
          <SignedOut>
            <Login/>
          </SignedOut>} 
          />

          <Route path="/signup" element={
          <SignedOut>
            <SignUp/>
          </SignedOut>  
          } />
          <Route path="*" element={<RedirectToSignIn/>} />
          
        </Routes>
      </div>
   
    
)
}

export default App  
