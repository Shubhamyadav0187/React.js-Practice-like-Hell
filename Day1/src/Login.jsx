import React, { useState } from 'react'

const Login = () => {
      const [username, setusername] = useState('');
      const [password, setpassword] = useState('');
      function handleSubmit(e){
        e.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        setpassword(" ")
        setusername(" ")
        
        
      }
  return (
     <form onSubmit={handleSubmit}>
        <input 
        type = "text"
        placeholder='Username'
        onChange={(e)=> setusername(e.target.value)}
        value={username}
        />
        <br/>
        <input type="password"
        placeholder='Password'
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        />
        <br/>
        <button type='submit'>Login</button>
     </form>
  )
}

export default Login