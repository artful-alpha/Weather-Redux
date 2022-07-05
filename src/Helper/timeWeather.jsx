export { timeWeather };

function addLeadingZero(d) {
  return d < 10 ? "0" + d : d;
}

const timeWeather = (data) => {
  const date = new Date(data);

  const h = date.getHours();
  const m = date.getMinutes();

  if (data) {
    return `${addLeadingZero(h)}:${addLeadingZero(m)}`;
  }

  return "";
};
