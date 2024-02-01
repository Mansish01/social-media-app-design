import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">SocialManish.</h3>
                <span className="logindesc">
                    Connet with people all around the world
                </span>
            </div>

            <div className="loginright">
               <div className="loginbox">
                  <input type="Email" className="logininput" placeholder='Email'/>
                  <input type="password" className="logininput" placeholder='Password'/>

                  <button className="loginbtn">Login</button>
                  <span className="forgotpassword">Forgot Password?</span>

                  <button className="registerbtn">Create a New Account</button>

               </div>
            </div>
        </div>
    </div>
  )
}

export default Login;