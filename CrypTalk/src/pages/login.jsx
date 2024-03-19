import React from 'react'

function Login() {
    return (
        <div className='login'>
            <form>
                <h3>Log In</h3>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control' />
                </div>
                <div className='mb-2'>
                    <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
                    <label htmlFor='check' className='custom-input-label'>Remember Me</label>
                </div>
                <div className='d-grid'><button>Log In</button></div>
                <p className='forgot-password text-right'>
                    Forgot <a href='#'>password?</a>
                </p>
         </form>
         </div>
                 )
                }