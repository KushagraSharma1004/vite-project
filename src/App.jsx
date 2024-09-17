// import { useState, useEffect } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <div style={{overflow:'hidden'}} >
      <Login />
      <SignUp /> 
      
    </div>
  );
};


export default App;
