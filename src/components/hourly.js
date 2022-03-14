import React from 'react';
import moment from 'moment';
import images from '../assets/weather-img';

const HourlyCard = ({weatherData}) => (
    <section className='card hourly-card'>
        <h2>Hourly Forecast</h2>
        <div className="flex forecast-section">
            <div>
                <p>Now</p>
                <img src={images['img' + weatherData.hourly[0].weather[0].icon]} 
                     alt={weatherData.hourly[0].weather[0].description}/>
                <p className='temp'>{Math.round(weatherData.hourly[0].temp)}&deg;</p>
            </div>
            <div>
                <p>{moment.utc(weatherData.hourly[1].dt * 1000).local().format('h a')}</p>
                <img src={images['img' + weatherData.hourly[1].weather[0].icon]} 
                     alt={weatherData.hourly[1].weather[0].description}/>
                <p className='temp'>{Math.round(weatherData.hourly[1].temp)}&deg;</p>
            </div>
            <div>
                <p>{moment.utc(weatherData.hourly[2].dt * 1000).local().format('h a')}</p>
                <img src={images['img' + weatherData.hourly[2].weather[0].icon]} 
                     alt={weatherData.hourly[2].weather[0].description}/>
                <p className='temp'>{Math.round(weatherData.hourly[2].temp)}&deg;</p>
            </div>
            <div>
                <p>{moment.utc(weatherData.hourly[3].dt * 1000).local().format('h a')}</p>
                <img src={images['img' + weatherData.hourly[3].weather[0].icon]} 
                     alt={weatherData.hourly[3].weather[0].description}/>
                <p className='temp'>{Math.round(weatherData.hourly[3].temp)}&deg;</p>
            </div>
            <div>
                <p>{moment.utc(weatherData.hourly[4].dt * 1000).local().format('h a')}</p>
                <img src={images['img' + weatherData.hourly[4].weather[0].icon]} 
                     alt={weatherData.hourly[4].weather[0].description}/>
                <p className='temp'>{Math.round(weatherData.hourly[4].temp)}&deg;</p>
            </div>
        </div>
    </section>
)

export default HourlyCard;