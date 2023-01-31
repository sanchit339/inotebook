import React from 'react'
import Add from "../img/upload.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Fake Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button>Sign-In</button>
            </form>
            <p>You don't have an account ? Register</p>
        </div>
    </div>
  )
}

export default Register
