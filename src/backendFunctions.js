import axios from 'axios';

export const handleSendQuestionGPT = async (question, language) => {
    try {
      const response = await axios.post(
        'https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel',
        {
          action: 'gpt',
          question: question,
          language: language
          
        }
      );
      console.log(response);
      return (response.data.body);
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };

export const handleOptionClickBackend = async (subject, language) => {
  try {
    const response = await axios.post(
      'https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel',
      {
        action: 'option-click',
        subject: subject,
        language: language
        
      }
    );
    console.log(response);
    return (response.data.body);
  } catch (error) {
    console.error('Error adding item:', error.message);
  }
};