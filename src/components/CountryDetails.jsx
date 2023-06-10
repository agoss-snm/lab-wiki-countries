import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 

      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
        );
        setCountry(response.data);
      } catch (error) {
        console.log(error);
        setCountry(null);
      }

      setIsLoading(false); 
    };

    fetchData();
  }, [params.countryId]);

  if (isLoading || country === null) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <img
        key={country.alpha3Code} 
        src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`}
        alt="photoCountry"
      />

      <h1>{country.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td >Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((eachBorder) => {
                  return (
                    <li key={eachBorder}>
                      <Link to={`/${eachBorder}`}>{eachBorder}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
