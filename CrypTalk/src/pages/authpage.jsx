import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

function AuthPage() {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignUpClick = () => {
        setShowSignUp(!showSignUp); // Toggles the visibility of the sign-up container
    };

    return (
        <div className="auth-container">
            <button onClick={handleSignUpClick}>{showSignUp ? 'Back to Login' : 'Sign Up'}</button>
            <div className="form-container">
                {showSignUp ? (
                    <div className='form_container'>
                        {/* Sign-up container */}
                        <input type="text" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <button>Sign Up</button>
                    </div>
                ) : (
                    <div className='form_container'>
                        {/* Login container */}
                        <input type="text" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <button>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AuthPage;
