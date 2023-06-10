import './App.css';
import Nav from './components/Nav-bar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesApi = async () => {
      try {
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setCountries(response.data);
      } catch (error) {
        console.log(error);
        setCountries([]);
      }
    };

    getCountriesApi();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="alignCollumns">
        <div>
          <CountriesList countries={countries} />
        </div>
        <div>
          <Routes>
            <Route path="/:countryId" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
