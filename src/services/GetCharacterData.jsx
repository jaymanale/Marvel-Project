import axios from 'axios';

const GetCharacterData = () => {
  let URL =
    'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=957f3e2ab0da2e77b9ef76d8c3550706&hash=492211148eb06fc7144c685e346da6b4';

  return axios.get(URL);
};

export default GetCharacterData;
