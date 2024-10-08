import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/style.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Fetch stored user credentials from sessionStorage
    const storedName = window.sessionStorage.getItem('name');
    const storedPassword = window.sessionStorage.getItem('password');

    // Validate login credentials
    if (username === storedName && password === storedPassword) {
      // Redirect to home page on successful login
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };
  
  return (
    <div id='login-container'>
      <form id='form-container' onSubmit={handleSubmit}>
      <h2>Login Page</h2> 
        <table id='table-container'>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // Update username state
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Login" />
              </td>
            </tr>
            <tr>
              <td>
                New user? <Link to="/register">Register here</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
export default Login;
