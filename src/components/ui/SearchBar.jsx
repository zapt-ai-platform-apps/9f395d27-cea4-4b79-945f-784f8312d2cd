import React from 'react';
import { useSearch } from '../../contexts/SearchContext';

export default function SearchBar() {
    const { searchTerm, setSearchTerm } = useSearch();
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    
    const clearSearch = () => {
        if (searchTerm) {
            setSearchTerm('');
        }
    };
    
    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search earning methods..."
                className="w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 box-border text-gray-800"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {searchTerm ? (
                    <button 
                        onClick={clearSearch}
                        className="text-gray-400 hover:text-gray-600 cursor-pointer"
                        aria-label="Clear search"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                )}
            </div>
        </div>
    );
}