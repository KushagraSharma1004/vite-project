import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase"; // Ensure the path to firebase.js is correct
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Fetch the user document
      const userDoc = await getDoc(doc(db, "users", mobileNumber));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        // Check if the password matches
        if (userData.password === password) {
          // Redirect to Menu if credentials are correct
          navigate('/menu');
        } else {
          // Show an error message if the password is incorrect
          alert('Incorrect password. Please try again.');
        }
      } else {
        // Redirect to SignUp if the user does not exist
        navigate('/signup');
      }
    } catch (e) {
      console.error('Error fetching user: ', e);
      alert('Error during login');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 10, border: '2px solid black', alignItems: 'center', justifyContent: 'center', height: '97vh' }}>
      <h1 style={{ margin: 0, width: '80%' }}>Login</h1>
      <input
        type="number"
        placeholder="Registered Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }}
      />
      <p style={{ margin: 0, width: '80%', textAlign: 'right', fontSize: '14px', marginTop: 5, color: 'blue' }}>Forgot Password?</p>
      <button onClick={handleLogin} style={{ height: '40px', width: '30%', marginTop: 10, backgroundColor: 'black', borderRadius: 7, color: 'white', fontSize: '20px' }}>Login</button>
    </div>
  );
};

export default Login;
