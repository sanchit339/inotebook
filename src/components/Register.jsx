import React from 'react'
import Add from "../img/upload.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Fake Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='file' style={{display : "none"}} id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt=''/>
                    <span>Add an Avatar</span>
                </label>
                <button>Sign-Up</button>
            </form>
            <p>Do You have an account ? Login</p>
        </div>
    </div>
  )
}

export default Register
