import React from 'react';
import { useCategory } from '../../contexts/CategoryContext';
import { useSearch } from '../../contexts/SearchContext';
import MethodCard from '../earning-methods/MethodCard';
import { earningMethods } from '../../data/earningMethods';
import { categories } from '../../data/categories';

export default function MainContent() {
    const { activeCategory } = useCategory();
    const { searchTerm } = useSearch();
    
    // Filter methods based on active category and search term
    const filteredMethods = earningMethods.filter(method => {
        const matchesCategory = activeCategory === 'all' || method.categoryId === activeCategory;
        const matchesSearch = searchTerm.trim() === '' || 
                             method.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             method.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    // Get active category name
    const getActiveCategoryName = () => {
        if (activeCategory === 'all') return 'All Earning Methods';
        const category = categories.find(cat => cat.id === activeCategory);
        return category ? category.name : 'All Earning Methods';
    };
    
    return (
        <main className="flex-1 overflow-auto p-4 md:p-6">
            <div className="container mx-auto">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {searchTerm ? `Search results for "${searchTerm}"` : getActiveCategoryName()}
                    </h2>
                    {activeCategory !== 'all' && (
                        <p className="text-gray-600 mt-1">
                            {categories.find(cat => cat.id === activeCategory)?.description}
                        </p>
                    )}
                </div>
                
                {filteredMethods.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <p className="text-gray-500">No earning methods found{searchTerm ? ` for "${searchTerm}"` : ''}.</p>
                        {searchTerm && (
                            <p className="text-gray-500 mt-2">Try a different search term or browse by category.</p>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMethods.map(method => (
                            <MethodCard key={method.id} method={method} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}