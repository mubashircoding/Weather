
import './App.css';
import { React } from "react";

import Search from './Components/search/search';
function App() {


  const handleOnSearchChange = (searchData) =>{

    console.log(searchData);

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

    </div>

  );
}

export default App;
