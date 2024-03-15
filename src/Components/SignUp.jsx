import { Link } from "react-router-dom";
import logo from "../img/insta.png";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="signup">
      <div className="form">
        <div className="form-container">
          <img src={logo} className="signUpImg" />
          <p className="loginPara">
            Please login to sea photos and videos from your friends{" "}
          </p>
        </div>
        <div>
          <input type="email" placeholder="email" name="email" />
        </div>
        <div>
          <input type="text" placeholder="Username" name="username" />
        </div>
        <div>
          <input type="password" placeholder="Password" name="password" />

          <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px opx" }}
          >
            By signing up ,you agree to our terms,
            <br />
            privacy policy and cookies policy{" "}
          </p>
          <input type="submit" id="submit-btn" value="Sign-Up" />
        </div>
        <Link to={"/signIn"}>
        <div className="form2" style={{color:"blue",cursor:"pointer" }}>
        Already have an accnt ?<span>Sign In</span>
        </div>
        </Link>
        
      </div>
    </div>
  );
};

export default SignUp;
