import axios from 'axios';

async function postData(data) {
  try {
    const response = await axios.post(`http://localhost:3000/auth`, {
      ...data,
    });

    return response.data;
  } catch (error) {
    throw error.message;
  }
}

export default postData;
