
import './App.css';

import CurrentWeather from './Components/current-weather/current-weather';
import Search from './Components/search/search';
function App() {


  const handleOnSearchChange = (searchData) =>{

    console.log(searchData);

  }

  return (
    <div className="container">
      <Search OnSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>

  );
}

export default App;
