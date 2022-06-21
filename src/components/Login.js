import React, { useState } from 'react'
import './myStyles.css'

import Axios from 'axios'


const Login = () => {

   const [usernameReg, setUsernameReg] = useState("")
   const [passwordReg, setPasswordReg] = useState(" ")

   const register = () =>{
      Axios.post('https://localhost3001/register', {
        username: usernameReg,
        password: passwordReg
      }).then((response) => {
        console.log(response)
      })
   }


  return (
    <div className='main'>
        <div className='sub-main'>
            <div>
              <div className='imgs'>
                  <div className='container-image'>
                    <img />
                  </div>
              </div>
            </div>
            <div>
              <h1>SignIn</h1>
              <div>
                <img />
                <input type='text' placeholder='username' className='name' 
                 onChange={(e) => {
                   setUsernameReg(e.target.value)
                 }}
                />
              </div>
              <div className='second-input'>
                <img />
                <input type='password' placeholder='password' className='name'
                onChange={(e) => {
                  setPasswordReg(e.target.value)
                }}
                /> 
              </div>
              <div className='login-button'>
                 <button onClick={register}>Log In</button>
              </div>
                <p className='link'>
                  <a href='#'>login Admin</a> Or <a href='#'>Sign Up</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login 