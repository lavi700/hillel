import React, { useState } from 'react';
import axios from 'axios';

export default function TestButton() {
  const [responseData, setResponseData] = useState(null);
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [lastName, setLastName] = useState()
  const [question, setQuestion] = useState()


  function handleName(event){
    setName(event.target.value)
  }
  function handleLastName(event){
    setLastName(event.target.value)
  }
  function handleAge(event){
    setAge(event.target.value)
  }
  function handleQuestion(event){
    setQuestion(event.target.value)
  }

  const handleAddItem = async () => {
    try {
      const response = await axios.post(
        'https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel',
        {
          action: 'add',
          name: name,
          lastName: lastName,
          age: age
        }
      );
      console.log(response);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };

  const handleDeleteAll = async () => {
    try {
      const response = await axios.post(
        'https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel',
        {
          action: 'delete-all',
          
        }
      );
      console.log(response);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };

  const handleSendQuestion = async () => {
    try {
      const response = await axios.post(
        'https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel',
        {
          action: 'gpt',
          question: question
          
        }
      );
      console.log(response);
      setResponseData(response.data.body);
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };


  return (
    <div>
      <button onClick={handleAddItem}>add item</button>
      <button onClick={handleDeleteAll}>delete all</button>

      <div>
        <input onChange={handleName} value={name} placeholder='name'/>
        <input onChange={handleAge} value={age} placeholder='age'/>
        <input onChange={handleLastName} value={lastName} placeholder='last name'/>
      </div>

      <div>
        <input onChange={handleQuestion} value={question}/>
        <button onClick={handleSendQuestion}>send</button>
      </div>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
