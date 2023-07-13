import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchContext"
import { FilterContext } from "../../contexts/FilterContext"
import Country from "./Country"
import Filter from "../Filter/Filter"

const CountryList = ({countries}) => {
  const { filterTerm } = useContext(FilterContext)
  const { searchTerm } = useContext(SearchContext)
  
  const filteredCountries = countries.filter((country) => {
    if (filterTerm !== 'all') 
    {
      return country.region.toLowerCase() === filterTerm.toLowerCase()
    }
    else return country
  })

  const searchedCountries = filteredCountries.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    searchedCountries.map((country, index) => {
      return (
        <Country key={index} country={country} />
      )
    })
  )

}

export default CountryList