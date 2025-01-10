import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-6">
                <div className="text-left">
                    <h3 className="text-2xl font-bold">GOAT</h3>
                    <p className="text-sm mt-2 leading-relaxed">
                        Protecting Your Products at Every Step. Transform your supply chain into a story of trust. Our blockchain technology ensures every product reaches your customers exactly as intended: pure, perfect, and protected.
                    </p>
                </div>

                <div className="text-left">
                    <h4 className="text-lg font-semibold">Social Media</h4>
                    <ul className="list-none mt-2 space-y-2">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Twitter</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Instagram</a></li>
                    </ul>
                </div>

                <div className="text-center mt-4">
                    <p className="text-xs">&copy; {new Date().getFullYear()} Planners. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
