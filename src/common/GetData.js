import getDataObject from './../services/GetData';

export const getData = async (object) => {
  const response = await getDataObject(object);
  return response.data.data.results;
};
