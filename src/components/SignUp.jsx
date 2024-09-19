import React, { useState } from "react";
import { db } from "../../firebase"; // Ensure the path to firebase.js is correct
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [referralNumber, setReferralNumber] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignUp = async () => {
    try {
      const userDocRef = doc(db, "users", mobileNumber); // Reference to the document with mobileNumber as ID
      const userDoc = await getDoc(userDocRef); // Get the document

      if (userDoc.exists()) {
        // User already exists, redirect to login
        alert('User already exists. Redirecting to login.');
        navigate('./login'); // Navigate to login page
      } else {
        // User doesn't exist, create new user
        await setDoc(userDocRef, {
          mobileNumber,
          name,
          password,
          address,
          referralNumber
        });
        alert('Sign Up Successful!');
      }
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error during Sign Up');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 10, border: '2px solid black', alignItems: 'center', justifyContent: 'center', height: '97vh' }}>
      <h1 style={{ margin: 0, width: '80%' }}>Sign Up</h1>
      <input
        type="number"
        placeholder="Your Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }}
      />
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }}
      />
      <input
        type="password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }}
      />
      <input
        type="text"
        placeholder="Your Address (Optional)"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }}
      />
      <div style={{ marginTop: 10, borderRadius: '7px', display: 'flex', flexDirection: 'row', height: '40px', width: '85%', position: 'relative' }}>
        <input
          type="number"
          placeholder="Referral Mobile Number (Optional)"
          value={referralNumber}
          onChange={(e) => setReferralNumber(e.target.value)}
          style={{ height: '40px', width: '100%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }}
        />
        <div style={{ margin: 0, position: 'absolute', top: 15, right: 10, zIndex: 40, height: 15, width: 15, backgroundColor: 'black', borderRadius: 50, color: 'white', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '12px' }}>i</p>
        </div>
      </div>
      <button onClick={handleSignUp} style={{ height: '40px', width: '30%', marginTop: 20, backgroundColor: 'black', borderRadius: 7, color: 'white', fontSize: '20px' }}>Sign Up</button>
    </div>
  );
};

export default SignUp;
