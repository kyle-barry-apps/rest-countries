import { useState, useEffect } from "react";
import { SearchProvider } from "./contexts/SearchContext";
import { FilterProvider } from "./contexts/FilterContext";
import { CountryProvider } from "./contexts/CountryContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";

function App() {

  const [countryData, setCountryData] = useState([])

  const getJson = () => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .then(resp => resp.json())
    .then(json => setCountryData(json))
    .catch(err => console.log(err))
  }

  useEffect(() => { 
    getJson()
  }, [])


  return (
    <ThemeProvider>
      <CountryProvider>
        <FilterProvider>
          <SearchProvider>
            <Header />
            <Layout countries={countryData}/>
          </SearchProvider>
        </FilterProvider>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default App;
