



const Login = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 10 , border: '2px solid black', alignItems:'center',justifyContent:'center', height:'97vh'}} >
          <h1 style={{ margin:0, width:'80%'}} >Login</h1>
          <input type="number" placeholder="Registered Mobile Number" style={{ marginTop: 10, height:'40px', width:'80%', borderRadius:'7px', fontSize:18, paddingLeft:10, outlineColor:'blue' }} />
          <input type="password" placeholder="Password" style={{ marginTop: 10, height: '40px', width: '80%', borderRadius: '7px', fontSize:18, paddingLeft:10, outlineColor:'blue' }} />
          <p style={{margin:0, width:'80%', textAlign:'right', fontSize:'14px', marginTop:5, color:'blue'}} >Forgot Password?</p>
          <button style={{height:'40px', width:'30%',marginTop:10, backgroundColor:'black', borderRadius: 7, color:'white', fontSize:'20px'}} >Login</button>
          <button style={{height:'40px', width:'30%',marginTop:10, backgroundColor:'grey', borderRadius: 7, color:'white', fontSize:'20px'}} >SignUp</button>
    </div>
  );
};

// const styles = StyleSheet.create({
  
// });

export default Login;
