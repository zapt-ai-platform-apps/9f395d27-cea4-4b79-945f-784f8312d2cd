import React from 'react';
import SearchBar from '../ui/SearchBar';

export default function Header({ toggleSidebar }) {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={toggleSidebar}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                        aria-label="Toggle sidebar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex items-center space-x-2">
                        <img 
                            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
                            alt="Logo" 
                            className="h-8 w-8" 
                        />
                        <h1 className="text-xl font-bold text-blue-600">Online Earning Guide</h1>
                    </div>
                </div>
                <div className="hidden md:block w-1/3">
                    <SearchBar />
                </div>
                <div>
                    <a 
                        href="https://www.zapt.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 flex items-center"
                    >
                        Made on ZAPT
                    </a>
                </div>
            </div>
            <div className="md:hidden px-4 py-2">
                <SearchBar />
            </div>
        </header>
    );
}