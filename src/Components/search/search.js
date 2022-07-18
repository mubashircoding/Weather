import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from 'react'
const Search=({onSearchChange})=> {
    const {search, setSearch}=useState(null);
    const handleOnChange  = (searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);
    }
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
}
export default Search;