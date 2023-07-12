import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import './app.css'

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
    <>
      <Header />
      <div className="search_and_filter">
        <Search />
        <Filter />
      </div>
    </>
  );
}

export default App;
