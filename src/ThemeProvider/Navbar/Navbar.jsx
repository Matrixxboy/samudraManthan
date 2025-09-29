import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Hooks/auth/useAuth';
import { Waves } from 'lucide-react';

import {
HomeIcon,
ChartBarIcon,
CircleStackIcon,
MapIcon,
CloudIcon,
ExclamationTriangleIcon,
ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { logout } = useAuth();


    const navLinks = [
        { path: "/", name: "Dashboard", icon: HomeIcon },
        { path: "/dataset", name: "DataBase", icon: CircleStackIcon },
        { path: "/alerts", name: "Alerts", icon: ExclamationTriangleIcon },
        { path: "/analytics", name: "Analytics", icon: ChartBarIcon },
        { path: "/forecast", name: "Forecast", icon: CloudIcon },
        { path: "/geospatial", name: "Geospatial", icon: MapIcon },
        { path: "/chatbot", name: "SamudraGyan", icon: ChatBubbleLeftRightIcon },
    ];
    return (
        <>
            {/* Sidebar for larger screens */}
            <div className="hidden pt-[70px] md:flex flex-col w-[270px] h-screen fixed left-0 top-0 border-r border-gray-600 p-4">
                <div className='flex flex-col justify-center items-center'>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-l  from-cyan-500 to-blue-500 flex items-center justify-center">
                        <Waves className="w-6 h-6 text-white " />
                        {/* Icon goes here */}
                    </div>

                    {/* Title */}
                    <p className="text-3xl  bg-gradient-to-l  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Samudra-Darpan
                    </p>

                    <p className="text-center text-gray-400 text-md max-w-md pb-7">
                        Marine Research & Fisheries Management
                    </p>
                </div>
                    
                <nav className="flex flex-col space-y-2">
                    {navLinks.map(link => (
                        <Link 
                            key={link.path} 
                            to={link.path} 
                            // 1. Added flex utilities for icon/text alignment
                            className="flex items-center space-x-3 p-2 rounded-lg text-white transition-colors duration-200 hover:bg-gray-700"
                        >
                            {/* 2. Nested the Icon inside the Link */}
                            <link.icon className='w-5 h-5 flex-shrink-0' />
                            
                            {/* The link name */}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto border-t pb-5 border-gray-600">
                    <div className="relative">
                        <button onClick={() => setProfileOpen(!profileOpen)} className="p-2 rounded-lg text-white hover:bg-gray-700 w-full">
                            Profile
                        </button>
                        {profileOpen && (
                            <div className="absolute bottom-full left-0 w-full text-white bg-gray-700 rounded mb-2">
                                <Link to="/settings" className="block p-2 hover:bg-gray-600">Settings</Link>
                                <button onClick={logout} className="block p-2 hover:bg-gray-600 w-full text-left">Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Burger menu for smaller screens */}
            <div className="md:hidden relative top-4 left-4 z-50">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-gray-800 p-2 rounded">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden pt-[70px] fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
                <h1 className="text-2xl font-bold mb-4">Samudra Manthan</h1>
                <nav className="flex flex-col space-y-2">
                    {navLinks.map(link => (
                        <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="p-2 rounded hover:bg-gray-700">{link.name}</Link>
                    ))}
                </nav>
                <div className="mt-auto">
                    <Link to="/settings" onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-700">Settings</Link>
                    <button onClick={() => { logout(); setIsOpen(false); }} className="block p-2 rounded hover:bg-gray-700 w-full text-left">Logout</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;