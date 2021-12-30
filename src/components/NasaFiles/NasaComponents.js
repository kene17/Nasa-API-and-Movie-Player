import React, { useState, useEffect, useCallback } from "react";

import NasaList from "./NasaList";

const API_KEY = "ZldqG22JYDiIcUn1zmsWTATk46A1ZuRGqEbGByPd";

function NasaComponents() {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNasa = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?count=6&api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const dataSet = await response.json();

      const transformedData = dataSet.map((dataSetData) => {
        return {
          title: dataSetData.title,
          explanation: dataSetData.explanation,
          image: dataSetData.url,
          date: dataSetData.date,
        };
      });

      setFetchedData(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    fetchNasa();
  }, [fetchNasa]);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchNasa}>shuffle</button>
      </section>
      <section>
        {!isLoading && fetchedData.length > 0 && (
          <NasaList dataList={fetchedData} />
        )}
        {!isLoading && fetchedData.length === 0 && !error && (
          <p>Please click the shuffle button to load up data.</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default NasaComponents;
