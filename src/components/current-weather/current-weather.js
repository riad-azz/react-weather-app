import './current-weather.css'

const CurrentWeather = ({ data }) => {
  return (
    <div className='weather'>
      <div className='top'>
        <div className='location-info'>
          <p className='city'>{data.city}</p>
          <p className='weather-desc'>{data.weather[0].description}</p>
        </div>
        <img className='weather-icon' alt='weather' src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className='bottom'>
        <div>
          <p className='temperature'>{Math.round(data.main.temp)}°C</p>
        </div>
        <div className='details'>
          <div className='paramter-row'>
            <span className='parameter-title'>Details</span>
          </div>
          <div className='paramter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className='paramter-row'>
            <span className='parameter-label'>Clouds</span>
            <span className='parameter-value'>{data.clouds.all}%</span>
          </div>
          <div className='paramter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>{data.wind.speed} m/s</span>
          </div>
          <div className='paramter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>{data.main.humidity}%</span>
          </div>
          <div className='paramter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;