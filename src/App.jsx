import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import { SearchProvider } from './contexts/SearchContext';
import { CategoryProvider } from './contexts/CategoryContext';

export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <CategoryProvider>
                <SearchProvider>
                    <Header toggleSidebar={toggleSidebar} />
                    <div className="flex flex-1 overflow-hidden">
                        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                        <MainContent />
                    </div>
                    <Footer />
                </SearchProvider>
            </CategoryProvider>
        </div>
    );
}