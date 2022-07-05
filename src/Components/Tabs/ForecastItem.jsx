export default function ForecastItem({
  forecastDate,
  forecastTime,
  forecastDescription,
  temp,
  forecastFeels,
  weatherIcon,
}) {
  return (
    <div className='forecast-item'>
      <div className='forecast-date-box'>
        <p className='forecast-date'>{forecastDate}</p>
        <p className='forecast-time'>{forecastTime}</p>
      </div>
      <div className='forecast-temperature-box'>
        <p className='forecast-temperature'>
          Temperature: <span className='circle-icon'>{temp}</span>
        </p>
        <p className='forecast-weather'>{forecastDescription}</p>
      </div>
      <div className='forecast-like-box'>
        <p className='forecast-feels'>
          Feels like: <span className='circle-icon'>{forecastFeels}</span>
        </p>
        <img
          className='forecast-weather-icon'
          src={weatherIcon}
          alt={forecastDescription}
        />
      </div>
    </div>
  );
}
