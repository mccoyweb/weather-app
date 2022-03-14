import React from 'react';
import './component.css';
import addImages from '../assets/additional-img';

const AddCard = ({weatherData}) => (
    <section className='card add-card'>
        <h2>Additional Conditions</h2>
        <div className='add-details'> 
            <div className="flex sun">
                <p>Sunrise: {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString('en-IN', {timeStyle: 'short'})}</p>
                <p>Sunset: {new Date(weatherData.current.sunset * 1000).toLocaleTimeString('en-IN', {timeStyle: 'short'})}</p>
            </div>
            <div className="flex">
                <p><img src={addImages.dewpoint} className='add-img' alt=''/>&nbsp;Dew point:</p> <p>{Math.round(weatherData.current.dew_point)}&deg;</p>
            </div>
            <div className="flex">
                <p><img src={addImages.barometer} className='add-img' alt=''/>&nbsp;Pressure:</p> <p>{(weatherData.current.pressure * 0.029529983071445).toFixed(2)} in</p>
            </div>
            <div className="flex">
                <p><img src={addImages.sun} className='add-img' alt=''/>&nbsp;UV index:</p> <p>{Math.round(weatherData.current.uvi)} of 10</p>
            </div>
            <div className="flex">
                <p><img src={addImages.visibility} className='add-img' alt=''/>&nbsp;Visibility:</p> <p>{Math.round(weatherData.current.visibility * 0.00062137)} mi</p>
            </div>
        </div>
    </section>
  )
  
  export default AddCard;