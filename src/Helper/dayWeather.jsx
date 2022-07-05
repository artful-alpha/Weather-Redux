export { dayWeather };

const dayWeather = (date) => {
  const today = new Date(date);

  const options = {
    month: "short",
    day: "2-digit",
  };
  return today.toLocaleString("en-GB", options);
};
