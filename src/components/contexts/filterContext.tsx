import {createContext, PropsWithChildren, useState} from "react";

export const FilterContext = createContext({
    filter: '',
    setFilter: (filter: string) => {},
});

export const FilterContextProvider = ({children}: PropsWithChildren) => {
    const [filter, setFilter] = useState('')
    return <FilterContext.Provider value={{filter, setFilter}} >
        {children}
    </FilterContext.Provider>

}