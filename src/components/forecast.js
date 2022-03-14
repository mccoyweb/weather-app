import React from 'react';
import images from '../assets/weather-img';

const ForecastCard = ({weatherData}) => (
    <section className='card forecast-card'>
        <h2>5-Day Forecast</h2>
        <div className="flex forecast-section">
            <div>
                <p>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date(weatherData.daily[1].dt * 1000))}</p>
                <img src={images['img' + weatherData.daily[1].weather[0].icon]} 
                     alt={weatherData.daily[1].weather[0].description} />
                <p>
                    <span className='temp'>{Math.round(weatherData.daily[1].temp.max)}&deg; </span> 
                    <span className='temp temp-low'>{Math.round(weatherData.daily[1].temp.min)}&deg;</span>
                </p>
            </div>
            <div>
                <p>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date(weatherData.daily[2].dt * 1000))}</p>
                <img src={images['img' + weatherData.daily[2].weather[0].icon]} 
                     alt={weatherData.daily[2].weather[0].description}/>
                <p>
                    <span className='temp'>{Math.round(weatherData.daily[2].temp.max)}&deg; </span> 
                    <span className='temp temp-low'>{Math.round(weatherData.daily[2].temp.min)}&deg;</span>
                </p>
            </div>
            <div>
                <p>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date(weatherData.daily[3].dt * 1000))}</p>
                <img src={images['img' + weatherData.daily[3].weather[0].icon]} 
                     alt={weatherData.daily[3].weather[0].description}/>
                <p>
                    <span className='temp'>{Math.round(weatherData.daily[3].temp.max)}&deg; </span> 
                    <span className='temp temp-low'>{Math.round(weatherData.daily[3].temp.min)}&deg;</span>
                </p>
            </div>
            <div>
                <p>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date(weatherData.daily[4].dt * 1000))}</p>
                <img src={images['img' + weatherData.daily[4].weather[0].icon]} 
                     alt={weatherData.daily[4].weather[0].description}/>
                <p>
                    <span className='temp'>{Math.round(weatherData.daily[4].temp.max)}&deg; </span> 
                    <span className='temp temp-low'>{Math.round(weatherData.daily[4].temp.min)}&deg;</span>
                </p>
            </div>
            <div>
                <p>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date(weatherData.daily[5].dt * 1000))}</p>
                <img src={images['img' + weatherData.daily[5].weather[0].icon]} 
                     alt={weatherData.daily[5].weather[0].description}/>
                <p>
                    <span className='temp'>{Math.round(weatherData.daily[5].temp.max)}&deg; </span> 
                    <span className='temp temp-low'>{Math.round(weatherData.daily[5].temp.min)}&deg;</span>
                </p>
            </div>
        </div>
    </section>
)

export default ForecastCard;