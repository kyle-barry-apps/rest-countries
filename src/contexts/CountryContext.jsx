import { createContext, useState } from "react";

export const CountryContext = createContext()

export const CountryProvider = ({ children }) => {
  const [countrySelected, setCountrySelected] = useState(null)

  return (
    <CountryContext.Provider value={{ countrySelected, setCountrySelected }}>
      {children}
    </CountryContext.Provider>
  )
}