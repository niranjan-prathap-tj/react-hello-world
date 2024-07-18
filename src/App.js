import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [fastApiData, setFastApiData] = useState([]);
  const [djangoData, setDjangoData] = useState([]);

  useEffect(() => {
    // Function to fetch data from FastAPI backend
    const fetchFastApiData = async () => {
      try {
        const response = await fetch('https://34.93.215.136/fastapi');
        if (!response.ok) {
          throw new Error('Failed to fetch data from FastAPI');
        }
        const data = await response.json();
        setFastApiData(data.message); // Updating state with fetched data
      } catch (error) {
        console.error('Error fetching data from FastAPI:', error);
      }
    };

    // Function to fetch data from Django backend
    const fetchDjangoData = async () => {
      try {
        const response = await fetch('https://34.93.215.136/django/test/');
        if (!response.ok) {
          throw new Error('Failed to fetch data from Django');
        }
        const data = await response.text();
        setDjangoData(data); // Updating state with fetched data
      } catch (error) {
        console.error('Error fetching data from Django:', error);
      }
    };

    // Call the fetch functions on component mount
    fetchFastApiData();
    fetchDjangoData();
  }, []); // Empty dependency array to run once on component mount

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Release - React App Calling FastAPI and Django</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Data from FastAPI:</h2>
              <ul>
                {fastApiData}
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Data from Django:</h2>
              <ul>
                {djangoData}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
