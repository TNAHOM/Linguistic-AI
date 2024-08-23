import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-28 rounded-3xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo and Name Column */}
                    <div className="flex items-center">
                        <img src="/api/placeholder/50/50" alt="Logo" className="h-8 w-8 mr-2" />
                        <span className="font-bold text-xl">Company Name</span>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Products</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="">Product 1</a></li>
                            <li><a href="#" className="">Product 2</a></li>
                            <li><a href="#" className="">Product 3</a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="">Blog</a></li>
                            <li><a href="#" className="">Docs</a></li>
                            <li><a href="#" className="">Support</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="">About Us</a></li>
                            <li><a href="#" className="">Careers</a></li>
                            <li><a href="#" className="">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="">Privacy Policy</a></li>
                            <li><a href="#" className="">Terms of Service</a></li>
                            <li><a href="#" className="">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;