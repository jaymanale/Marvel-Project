import axios from 'axios';

const GetData = async ({ type, pageOffset, orderBy }) => {
  console.log('Page offset:', pageOffset);
  let URL = `https://gateway.marvel.com/v1/public/${type}?orderBy=${orderBy}&ts=1&offset=${pageOffset}&limit=10&apikey=957f3e2ab0da2e77b9ef76d8c3550706&hash=492211148eb06fc7144c685e346da6b4`;

  const response = await axios.get(URL);
  return response.data.data.results;
};

export default GetData;
