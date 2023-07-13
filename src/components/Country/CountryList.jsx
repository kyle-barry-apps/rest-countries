import Country from "./Country"

const CountryList = ({countries}) => {
  return (
    countries.map((country, index) => {
      return (
        <Country key={index} country={country} />
      )
    })
  )

}

export default CountryList