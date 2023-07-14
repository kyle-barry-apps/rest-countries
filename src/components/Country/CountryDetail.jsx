
const CountryDetail = ({ country }) => {


  return (
    <div className='countryDetail'>
      <div className="countryDetail__back">

      </div>
      <div className="countryDetail__information">
        <div className="countryDetail__image"></div>
        <div className="countryDetail__details">
          <div className="countryDetail__title">{country.name}</div>
          <div className="countryDetail__data">

          </div>
        </div>
        <div className="countryDetail__borders">

        </div>
      </div>
    </div>
  )
}

export default CountryDetail