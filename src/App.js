
import './App.css';
import { useEffect, useState } from 'react';
import Weather from './components/weather';
import Hourly from './components/hourly';
import Forecast from './components/forecast';
import Additional from './components/additional';

function App() {
  const [data, setData] = useState([]);

  let getLocation = () => new Promise((resolve, reject) => 
  navigator.geolocation.getCurrentPosition(resolve, reject));

  async function location() {
    try {
      console.log('getting location...');
      let position = await getLocation();
      console.log('got location');
      getWeather(position.coords.latitude, position.coords.longitude);
    } catch (e) {
      console.log('ERROR');
      console.log(e.message)
    }
  }

  // Fetch weather data

  const getWeather = (lat, long) => {
    fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
  }

  // Call location only once

  useEffect(() => {
    location();
  }, []);


  return (
    <div className="App">
      {(typeof data.current != 'undefined') ? (
        <>
          <Weather weatherData={data} />
          <Hourly weatherData={data} />
          <Additional weatherData={data} />
          <Forecast weatherData={data} />
        </>
      ): (
        <div className='loading'>Loading...</div>
      )}
    </div>
  );
}

export default App;
