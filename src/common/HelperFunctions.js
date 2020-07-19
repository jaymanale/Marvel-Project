export const getFilterData = (object, property, searchString) => {
  object = object.filter(
    (obj) =>
      obj[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1
  );
  return object;
};
