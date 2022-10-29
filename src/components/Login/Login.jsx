import React from 'react'
import './Login.css'
import profile from '../../assets/img/logologin.png'
import email from '../../assets/img/email.jpg'
import password from '../../assets/img/pass.png'

const Login = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div className="img">
          <div className="container-imagen">
            <img src={profile} alt="profile" className="profile" />
          </div>
        </div>
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={email} alt="email" className="email" />
            <input type="text" placeholder="User name" className="name" />
          </div>
          <div className="second-input">
            <img src={password} alt="password" className="email" />
            <input type="text" placeholder="Password" className="name" />
          </div>
          <div className="login-buton">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
