import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'e174e2361bmsh5912e6861f1be00p1e770bjsnc9b65fdc5e47',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  } catch (error) {
    console.log(error);
  };
};