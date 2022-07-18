import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from 'react'
const Search = ({ OnSearchChange }) => {
  const [search, setSearch] = useState(null);
const loadOptions=(inputValue)=>{

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