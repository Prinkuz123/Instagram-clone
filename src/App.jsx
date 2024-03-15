import Navbar from "./Components/Navbar"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Profile from "./Components/Profile"

function App() {

  return (
     
<div className="App">
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/signUp" element={<SignUp/>} />
<Route path="/signIn" element={<SignIn/>} />
<Route path="/profile" element={<Profile/>} />
</Routes>
</div>
    

  )
}

export default App
