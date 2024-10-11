import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_KEY = "513fa09d74msha06d7e7665c1034p183f9fjsn4823925614b0"

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
