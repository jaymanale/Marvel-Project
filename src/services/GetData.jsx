import axios from 'axios';

const GetData = async ({ type, pageOffset, orderBy }) => {
  let URL = `https://gateway.marvel.com/v1/public/${type}?orderBy=${orderBy}&ts=1&offset=${pageOffset}&limit=10&apikey=${process.env.API_KEY}&hash=${process.env.HASH_KEY}`;

  const response = await axios.get(URL);
  return response.data.data.results;
};

export const getCharactorById = async (charactorId) => {
  let URL = `https://gateway.marvel.com/v1/public/characters/${charactorId}?&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH_KEY}`;

  const response = await axios.get(URL);
  return response.data.data.results[0];
};

export default GetData;
