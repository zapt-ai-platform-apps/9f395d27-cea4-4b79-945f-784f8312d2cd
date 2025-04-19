import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext();

export function useCategory() {
    return useContext(CategoryContext);
}

export function CategoryProvider({ children }) {
    const [activeCategory, setActiveCategory] = useState('all');
    
    const value = {
        activeCategory,
        setActiveCategory
    };
    
    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    );
}