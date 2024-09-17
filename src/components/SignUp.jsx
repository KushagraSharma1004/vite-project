// import { useState, useEffect } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';


const SignUp = () => {
  return (
    
      <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 10 , border: '2px solid black', alignItems:'center',justifyContent:'center', height:'97vh'}} >
          <h1 style={{ margin:0, width:'80%'}} >Sign Up</h1>
          <input type="number" placeholder="Your Mobile Number" style={{ marginTop: 10, height:'40px', width:'80%', borderRadius:'7px', fontSize:18, paddingLeft:10, outlineColor:'blue' }} />
          <input type="text" placeholder="Your Name" style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }} />
          <input type="password" placeholder="Create Password" style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize:18, paddingLeft:10, outlineColor:'blue' }} />
          <input type="address" placeholder="Your Address (Optional)" style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }} />
          <div style={{marginTop: 10, borderRadius: '7px', display:'flex', flexDirection:'row',height: '40px', width: '85%',position:'relative'}} >
              <input type="number" placeholder="Referral Mobile Number (Optional)" style={{ height: '40px', width: '100%', borderRadius: '7px', fontSize: 18, paddingLeft: 10, outlineColor: 'blue' }} />
              <div style={{margin: 0, position: 'absolute', top: 15, right: 10, zIndex: 40, height:15, width:15, backgroundColor:'black', borderRadius:50, color:'white', textAlign:'center'}} >
                  <p style={{margin:0, fontSize:'12px'}} >i</p>
              </div>
          </div>
          <button style={{ height: '40px', width: '30%', marginTop: 20, backgroundColor: 'black', borderRadius: 7, color: 'white', fontSize: '20px' }} >SignUp</button>
          <button style={{height:'40px', width:'30%',marginTop:10, backgroundColor:'grey', borderRadius: 7, color:'white', fontSize:'20px'}} >Login</button>
          
    </div>
    
  );
};

// const styles = StyleSheet.create({
  
// });

export default SignUp;
