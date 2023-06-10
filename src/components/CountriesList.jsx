import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div style={{ height: '500px', overflow: 'auto' }}>
      <h3>Lista de países</h3>
      <div>
        {countries.map((eachCountry) => (
          <div key={eachCountry.alpha3Code}>
            <img
              key={eachCountry.alpha3Code} 
              src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
              alt="foto-pais"
            />
            <br />
            <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
