import CONFIG from "../config";

const iconWeather = (imgCode) => {
  if (imgCode) {
    return CONFIG.IMG + imgCode + "@2x.png";
  } else {
    return CONFIG.IMG;
  }
};

export default iconWeather;
