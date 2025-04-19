import React, { useState } from 'react';
import { categories } from '../../data/categories';

export default function MethodCard({ method }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const category = categories.find(cat => cat.id === method.categoryId);
    
    // Determine difficulty color
    const difficultyColor = method.difficulty === 'Easy' 
        ? 'bg-green-100 text-green-800' 
        : method.difficulty === 'Medium' 
            ? 'bg-yellow-100 text-yellow-800' 
            : 'bg-red-100 text-red-800';
    
    // Determine earning potential display
    const getEarningStars = () => {
        const count = method.earningPotential.length;
        return '💰'.repeat(count);
    };
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-2">
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full mr-2">
                        {category?.icon} {category?.name}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <div className="flex flex-wrap items-center mb-3 gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${difficultyColor}`}>
                        {method.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">
                        Earning potential: {getEarningStars()}
                    </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                    {isExpanded ? method.description : `${method.description.substring(0, 150)}${method.description.length > 150 ? '...' : ''}`}
                </p>
                
                {isExpanded && (
                    <>
                        <div className="mb-4">
                            <h4 className="font-bold text-gray-700 mb-2">How to get started:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-gray-600 ml-2">
                                {method.howToStart.map((step, index) => (
                                    <li key={index} className="pl-1">{step}</li>
                                ))}
                            </ol>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <h4 className="font-bold text-gray-700 mb-2">Pros:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                                    {method.pros.map((pro, index) => (
                                        <li key={index} className="pl-1">{pro}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700 mb-2">Cons:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                                    {method.cons.map((con, index) => (
                                        <li key={index} className="pl-1">{con}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {method.tips && (
                            <div className="mb-4">
                                <h4 className="font-bold text-gray-700 mb-2">Tips:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                                    {method.tips.map((tip, index) => (
                                        <li key={index} className="pl-1">{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        {method.resources && (
                            <div>
                                <h4 className="font-bold text-gray-700 mb-2">Resources:</h4>
                                <ul className="space-y-1 ml-2">
                                    {method.resources.map((resource, index) => (
                                        <li key={index}>
                                            <a 
                                                href={resource.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                {resource.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}
                
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium cursor-pointer flex items-center"
                >
                    {isExpanded ? (
                        <>
                            <span>Show less</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </>
                    ) : (
                        <>
                            <span>Learn more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}