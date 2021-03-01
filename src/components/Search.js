import React,{useState} from 'react';


function Search() {
    const [search, setSearch] = useState(true)
    return (
      <div className="search">
        {search ? (
          <div className="top">
            <button onClick={() => setSearch((prevState) => !prevState)}>
              Search for places
            </button>
            <button>&#9728;</button>
          </div>
        ) : (
          <div className="searchbar">
            <button onClick={() => setSearch((prevState) => !prevState)}>X</button>
            <div className="top">
              <input type="text" name="" placeholder="search location" />
              <button>Search</button>
            </div>
          </div>
        )}
      </div>
    );

    function searchbar() {
        
    }
}

export default Search
