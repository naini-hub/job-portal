import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState()
    
    
    const value = {

    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}