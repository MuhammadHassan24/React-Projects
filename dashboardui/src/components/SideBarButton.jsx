import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router';
import { ChevronDown } from 'lucide-react';

export const SidebarButton = React.memo(({ nav, openSideBar, setOpenNavMenu, isOpen }) => {
    const isExpand = openSideBar;


    const handleClick = (e) => {
        if (nav.children) {
            e.preventDefault();
        }

        setOpenNavMenu(isOpen ? null : nav.title);
    };

    return (
        <div className="flex flex-col">
            <NavLink to={nav?.path || '#'} onClick={handleClick}
                className={({ isActive }) =>
                    `${isActive ? "active-nav-link" : "inactive-nav-link"}`
                }>
                {({ isActive }) => (
                    <div className={`flex h-11 items-center ${!isExpand ? "gap-0 px-2" : "gap-4 pe-3.5"}`}>
                        {isExpand && (
                            <div
                                className={`w-2 h-full flex self-start rounded-tr-md rounded-br-md transition-colors duration-200 ${isActive ? "bg-[#6E39CB]" : "bg-transparent"
                                    }`}>
                            </div>
                        )}
                        <div
                            className={`flex justify-between items-center text-sm w-full h-full px-1.5 rounded-md transition-colors duration-200 ${isActive ? "bg-[#6E39CB]/40 text-[#6E39CB]" : "hover:bg-[#6E39CB]/10"
                                }`}>
                            <div className={`flex items-center gap-2 ${!isExpand ? 'justify-center w-full' : ''}`}>
                                <nav.icon size={18} />
                                {isExpand && <h1>{nav.title}</h1>}
                            </div>
                            {nav.children && isExpand && (
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                />
                            )}
                        </div>
                    </div>
                )}
            </NavLink>

            {nav.children && isExpand && (
                <div
                    className={`
                        grid transition-all duration-300 ease-in-out
                        ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                    `}
                >
                    <div className="overflow-hidden">
                        <div
                            className={`pl-14 pt-5 space-y-5 text-sm transition-opacity duration-200 ${isOpen ? 'opacity-100 delay-75' : 'opacity-0'
                                }`}
                        >
                            {nav.children.map((child, index) => (
                                <NavLink
                                    key={index}
                                    to={child.path}
                                    className={({ isActive }) =>
                                        `block py-1 ${isActive ? 'text-[#6E39CB]' : 'hover:text-[#6E39CB]'}`
                                    }
                                >
                                    {child.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});