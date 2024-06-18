import React from 'react';
import {NavLink} from 'react-router-dom';

const navLinkBaseClass = 'py-5 px-3 hover:bg-gray-700 rounded transition duration-300 nav-link';


const Navbar = () => {
    return (
        <nav className="bg-slate-900 text-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Title */}
                    <NavLink to="/" className="flex items-center py-5 px-2">
                        {/* Update the src attribute to your logo's correct path */}
                        <img src="/logo.jpg" alt="Logo"
                             className="h-10 w-10 rounded-full mr-2 border-2 border-white bg-zinc-300"/>
                        {/* Main Title with Subtitle */}
                        <div>
                            <span className="font-bold text-gray-200 hover:text-gray-300 text-xl">戏码台</span>
                            <p className="hidden sm:block text-gray-400 text-sm">音同徐州著名景点「戏马台」，实为老刘的技术博客，取嬉戏于代码间之意。</p>
                        </div>
                    </NavLink>
                    {/* Primary Nav */}
                    <div className="flex items-center space-x-1">
                        <NavLink to="/"
                                 className={({isActive}) => `${navLinkBaseClass} ${isActive ? 'active-link' : ''}`}>Home</NavLink>
                        <NavLink to="/apps"
                                 className={({isActive}) => `${navLinkBaseClass} ${isActive ? 'active-link' : ''}`}>Apps</NavLink>
                        <NavLink to="/booklist"
                                 className={({isActive}) => `${navLinkBaseClass} ${isActive ? 'active-link' : ''}`}>BookList</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
