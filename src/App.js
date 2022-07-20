
import './App.css';

import CurrentWeather from './Components/current-weather/current-weather';
import Search from './Components/search/search';
import {WEATHER_API_URL, WEATHER_API_KEY} from './api'
function App() {


  const handleOnSearchChange = (searchData) =>{

    const{lat,lon}=searchData.value.split(" ");

    const currentWeatherfetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

  }

  return (
    <div className="container">
      <Search OnSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>

  );
}

export default App;
