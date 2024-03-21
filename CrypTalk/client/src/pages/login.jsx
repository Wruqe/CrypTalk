import React, { useState } from 'react';


function LoginContainer() {
    const [showSignUp, setShowSignUp] = useState(false);    const handleSignUpClick = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <div>
            <button onClick={handleSignUpClick}>{showSignUp ? 'Login' : 'Sign Up'}</button>
            {showSignUp ? (
                <div id='signup'>
                    {/* Sign-up container */}
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <button>Sign Up</button>
                </div>
            ) : (
                <div id='login'>
                    {/* Login container */}
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <button>Login</button>
                </div>
            )}
        </div>
    );
}

export default LoginContainer;