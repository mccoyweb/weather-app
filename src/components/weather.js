import React from 'react';
import './component.css';
import moment from 'moment';
import images from '../assets/weather-img';

const WeatherCard = ({weatherData}) => {

    const backgroundPicker = (id) => {
        if (id < 600) {
            return 'card weather-card bg-rain'
        }
        else if (id >= 600 && id < 700) {
            return 'card weather-card bg-snow'
        }
        else if (id === 800) {
            return 'card weather-card bg-clear'
        }
        else if (id === 801 || id === 802) {
            return 'card weather-card bg-partlycloudy'
        }
        return 'card weather-card bg-cloudy'
    }

    return (<section className={backgroundPicker(weatherData.current.weather[0].id)}>
        <div className='card-header'>
            <h1>Current Weather</h1>
            <p>{moment().format('dddd, LL')}</p>
        </div>
        <div>
            <div className='flex'>
                <div>
                    <p className='current-temp'>{Math.round(weatherData.current.temp)}&deg;F</p>
                    <p>{Math.round(weatherData.daily[0].temp.max)}&deg; / {Math.round(weatherData.daily[0].temp.min)}&deg;</p>
                </div>
                <div>
                    <img className='current-icon' src={images['img' + weatherData.current.weather[0].icon]} alt=''/>
                    <p className='description'>{weatherData.current.weather[0].description}</p>
                </div>
            </div>
            <div className='flex weather-details'>
                <p>Feels like: {Math.round(weatherData.current.feels_like)}&deg;</p>
                <p>Wind: {Math.round(weatherData.current.wind_speed)} mph</p>
                <p>Precipitation: {weatherData.daily[0].pop * 100}%</p>
                <p>Humidity: {weatherData.current.humidity}%</p>
            </div>
        </div>
        {weatherData.alerts &&
            <div className='weather-alert'>
                <img src={images.warning} className='alert-icon' alt='warning'/>&nbsp;
                {weatherData.alerts[0].event}
            </div>  
        }
    </section>);
  }
  
  export default WeatherCard;