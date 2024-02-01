import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Register.</h3>
                <span className="logindesc">
                    Kindly fill this form to register.
                </span>
            </div>

            <div className="loginright">
               <div className="loginbox">
            
                  <input type="text" className="logininput" placeholder='Username'/>
                  <input type="Email" className="logininput" placeholder='Email'/>
                  <input type="password" className="logininput" placeholder='Password'/>
                  <input type="password" className="logininput" placeholder='Confirm Password'/>


                  <button className="loginbtn">Sign Up</button>
                  <span className="forgotpassword">Already Have an account?
                    <Link to="/login" className='loginlink'> Login </Link>
                  </span>

               </div>
            </div>
        </div>
    </div>
  )
}

export default Register;