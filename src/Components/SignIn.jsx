import { Link } from 'react-router-dom'
import logo from '../img/insta.png'
import'./SignIn.css'
const SignIn = () => {
  return (
    <div className="singIn">
    <div>
<div className="loginForm">
<img src={logo}  className='signIn-img'/>
<div >
<input type='email' placeholder='Email' name='email' id='email'/>
</div>
<div>
<input type='password' placeholder='Password' name='password' id='password'/>
</div>
<input type='submit' id='login-btn' value="sign In"/>

</div>
<div className='loginForm2'> Dont have an account?
<Link to={"/signUp"}>
<span style={{color:"blue",cursor:"pointer"   }}>Sign Up</span>
</Link>

</div>
    </div>
     
    </div>
  )
}

export default SignIn
