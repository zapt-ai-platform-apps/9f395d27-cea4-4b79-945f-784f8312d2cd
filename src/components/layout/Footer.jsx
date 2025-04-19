import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Online Earning Guide. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a 
                            href="https://www.zapt.ai" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Made on ZAPT
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-xs text-gray-400 text-center">
                    <p>
                        Disclaimer: This guide is for informational purposes only. 
                        Results may vary and we do not guarantee any specific earnings.
                    </p>
                </div>
            </div>
        </footer>
    );
}