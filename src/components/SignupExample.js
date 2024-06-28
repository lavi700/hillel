import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupExample() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const navigate = useNavigate()

  const [confirmationCode, setConfirmationCode] = useState('')

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  function handleConfirmationChange(e){
    setConfirmationCode(e.target.value)
  }

  const handleSendConfirmation = async (email, confirmation_code) => {
    try {
        const response = await axios.post('https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel', {
          action: 'confirm',
          email: email,
          confirmation_code: confirmation_code
        });
        setResponseMessage(response.data);
      } catch (error) {
        setResponseMessage(error.response.data);
      }
    };

    const handleLogin = async () => {
        try {
          const response = await axios.post('https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel', {
            action: 'login',
            email: formData.email,
            password: formData.password
          }, { withCredentials: true });
          
            setResponseMessage(response.data);

            // if (response.data === 'Login successful'){
            //   navigate("/check")
            // }
          } catch (error) {
            setResponseMessage(error.response.data);
          }
        };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel', {
        action: 'sign-up',
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        password: formData.password
      });
      setResponseMessage(response.data);
    } catch (error) {
      setResponseMessage(error.response.data);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel", {
        action: 'logout',
      }, {
        withCredentials: true,
      });
  
      // Assuming response.data contains the data you need
      setResponseMessage(response.data);
  
    } catch (error) {
      setResponseMessage(error.response.data);
    }
  };
  

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      <input placeholder='confirmation' value={confirmationCode} onChange={handleConfirmationChange} maxLength={6}/>
      <button onClick={()=>handleSendConfirmation(formData.email, confirmationCode)}>Send</button> 
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


