import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filterTerm, setFilterTerm] = useState(null)

  return (
    <FilterContext.Provider value={{ filterTerm, setFilterTerm }}>
      {children}
    </FilterContext.Provider>
  )
}