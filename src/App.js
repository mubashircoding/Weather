
import './App.css';


import Search from './Components/search/search';
function App() {


  const handleOnSearchChange = (searchData) =>{

    console.log(searchData);

  }

  return (
    <div className="container">
      <Search OnSearchChange={handleOnSearchChange} />

    </div>

  );
}

export default App;
