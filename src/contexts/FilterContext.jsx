import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filterTerm, setFilterTerm] = useState('all')

  return (
    <FilterContext.Provider value={{ filterTerm, setFilterTerm }}>
      {children}
    </FilterContext.Provider>
  )
}