import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export function useSearch() {
    return useContext(SearchContext);
}

export function SearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');
    
    const value = {
        searchTerm,
        setSearchTerm
    };
    
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}