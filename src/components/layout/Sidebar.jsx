import React from 'react';
import { useCategory } from '../../contexts/CategoryContext';
import { categories } from '../../data/categories';

export default function Sidebar({ isOpen, setIsOpen }) {
    const { activeCategory, setActiveCategory } = useCategory();
    
    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };
    
    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            
            <aside 
                className={`bg-white shadow-md z-20 w-64 absolute inset-y-0 left-0 transform 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:relative md:translate-x-0 transition duration-200 ease-in-out overflow-y-auto`}
                style={{ top: '0', height: '100%' }}
            >
                <div className="p-5">
                    <h2 className="font-bold text-lg mb-4">Categories</h2>
                    <ul className="space-y-2">
                        <li>
                            <button
                                className={`w-full text-left px-3 py-2 rounded-md cursor-pointer ${activeCategory === 'all' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                                onClick={() => handleCategoryClick('all')}
                            >
                                All Methods
                            </button>
                        </li>
                        {categories.map(category => (
                            <li key={category.id}>
                                <button
                                    className={`w-full text-left px-3 py-2 rounded-md cursor-pointer ${activeCategory === category.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}