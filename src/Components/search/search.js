import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from 'react'
import { GEO_API_URL, geoApiOptions } from '../../api';
const Search = ({ OnSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000000&namePrefix=${inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    OnSearchChange(searchData);
  };


  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
export default Search;