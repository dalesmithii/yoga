import React, { useState, useEffect } from 'react';
import SearchablePoseList from './components/SearchablePoseList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const updateField = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
 
      try {
        const result = await axios(
          'https://localhost:5001/poses',
          {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:3000',
              'Content-Type': 'application/json',
            }
          }
        );

        setData(result.data);
      } catch (error) {
        const e = error;
      }
    };
 
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <div className="form-container">
        <input
          value={searchTerm}
          name="searchTerm"
          onChange={updateField}
        />
      </div>
      <SearchablePoseList fullPoseList={data} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
