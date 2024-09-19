import React, { useState } from 'react';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggle = () => {
    setShowSignUp(prevState => !prevState);
  };

  return (
    <div className="app-container">
      <button 
        onClick={handleToggle} 
        className="toggle-button"
        aria-label={showSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      >
        {showSignUp ? 'Already Registered? Login' : 'Not Registered? Sign Up'}
      </button>
      <div className={`form-container ${showSignUp ? 'show-signup' : 'show-login'}`}>
        <div className="login-container">
          <Login />
        </div>
        <div className="signup-container">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default App;
