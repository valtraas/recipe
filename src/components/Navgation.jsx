import { useState, useEffect } from "react";
import waveHeader from "../assets/Vector(1).svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export const Navigation = ({ activeSection }) => {
    const [mobileNav, setMobileNav] = useState(false);
    const [activeNav, setActiveNav] = useState('home');
    const location = useLocation();
    // const NonLanding = location.pathname !== '/' ? 'recipes' : '';
    useEffect(() => {
        setActiveNav(activeSection)
    }, [activeSection]);

//     useEffect(() => {
//         setActiveNav(NonLanding)
//     }, [NonLanding])
// console.log(NonLanding);
    const handleActiveSection = (menu) => {
        setActiveNav(menu)
    };


    const menuLanding = [
        {
            name: 'Home',
            href: '#home'
        },
        {
            name: 'Popular',
            href: '#popular'
        },
        {
            name: 'Recipe',
            href: '#recipe'
        },
    ];

    const menuNonLanding = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Popular',
            href: '/'
        },
        {
            name: 'Recipe',
            href: '/recipes'
        },
    ];

    const navbarMobile = (
        <div className="fixed top-16 bg-white/70 backdrop-blur-md w-full left-0 p-3 right-0 lg:hidden md:hidden text-primary transition shadow-md z-[999]">
            <ul className="menu menu-vertical px-1 gap-10 items-center">
                {location.pathname === '/' ? (
                    menuLanding.map((menu, index) => (
                        <li
                            className={`hover:font-bold cursor-pointer text-xl font-extralight hover:border-b hover:border-primary duration-300 ${activeNav === menu.name.toLowerCase() ? 'font-bold' : ''}`}
                            key={index}
                            onClick={() => handleActiveSection(menu.name.toLowerCase())}
                        >
                            <a href={menu.href}>{menu.name}</a>
                        </li>
                    ))
                ) : (
                    menuNonLanding.map((menu, index) => (
                        <li
                            className={`hover:font-bold cursor-pointer text-xl font-extralight hover:border-b hover:border-primary duration-300 ${activeNav === 'recipes' && menu.name === 'Recipe' ? 'font-bold' : ''}`}
                            key={index}
                            onClick={() => handleActiveSection('recipes')}
                        >
                            <Link to={menu.href}>{menu.name.toLowerCase()}</Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );

    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <>
            <div className="navbar bg-gradient-to-b from-primary to-primary/70 shadow-md text-white p-4 fixed z-[999] backdrop-blur-sm">
                <div className="flex-1">
                    <a className="text-2xl font-bold uppercase">Get Recipe</a>
                </div>
                <div className="hidden md:flex items-center">
                    <ul className="p-3 md:menu-horizontal px-1 gap-10 items-center">
                        {location.pathname === '/' ? (
                            menuLanding.map((menu, index) => (
                                <li
                                    className={activeNav === menu.name.toLowerCase() ? 'font-bold cursor-pointer duration-300 text-xl' : 'font-extralight hover:font-bold cursor-pointer duration-300 text-xl'}
                                    key={index}
                                    onClick={() => handleActiveSection(menu.name.toLowerCase())}
                                >
                                    <a href={menu.href}>{menu.name}</a>
                                </li>
                            ))
                        ) : (
                            menuNonLanding.map((menu, index) => (
                                <li
                                    className={activeNav === 'home' && menu.name === 'Home' ? 'font-bold cursor-pointer duration-300 text-xl' : 'font-extralight hover:font-bold cursor-pointer duration-300 text-xl'}
                                    key={index}
                                    onClick={() => handleActiveSection('home')}
                                >
                                    <Link to={menu.href}>{menu.name}</Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="swap swap-rotate" onClick={handleMobileNav}>
                        <input type="checkbox" className="hidden" checked={mobileNav} readOnly />
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </button>
                </div>
            </div>
            {mobileNav && navbarMobile}
            <img src={waveHeader} className="w-max md:pt-0 pt-12 duration-700" />
        </>
    );
};

Navigation.propTypes = {
    activeSection: propTypes.any
};
