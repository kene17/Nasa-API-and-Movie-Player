import React, { useState, useCallback, useEffect } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";

const IMDBComponents = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const API_KEY = "b98c7399";

  const FetchData = async (searchValue) => {
    setIsLoading(true);
    setError(null);
    try{
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=b98c7399`
    );
    const responseJson = await response.json();
    if (responseJson.Search) {
      setFetchedData(responseJson.Search);
    }
    setIsLoading(false);
  } catch (error) {
      setError(error.message);

  }
}

  useEffect(() => {
    FetchData(searchValue);
  }, [searchValue]);
  return (
    <React.Fragment>
      <section>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
      <section>
        {!isLoading ? (fetchedData.map((data) => (
          <Card
            title={data.Title}
            year={data.Year}
            type={data.Type}
            poster={data.Poster}
          />
        ))
        ):(
            <div>
            <h2>Loading...</h2>
            </div>
        )
        }
        
        {!isLoading && error && <p>{error}</p>}
        {/* {!isLoading ? (
          fetchedData.map(data => (
              <Card
              title = {data.Title}
              year = {data.Year}
              type = {data.Type}
              poster = {data.Poster}   
           />
          ))
        ) : (
          <div >
            <h2>Loading...</h2>
          </div>
        )
        } */}
        {/* {!isLoading && fetchedData.length === 0 && !error && (
          <p> Please click the shuffle button to load up data. </p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
      </section>
    </React.Fragment>
  );
};

export default IMDBComponents;
