export const convertTemp = (temp) => {
  if (temp) {
    return Math.floor(temp - 273.15);
  } else {
    return "";
  }
};
export default convertTemp;
