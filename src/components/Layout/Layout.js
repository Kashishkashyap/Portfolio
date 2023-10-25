import React, { useState, useEffect } from 'react';
import Home from '../../pages/Home/Home';
import './layout.css';
import { Link } from 'react-scroll';

const Layout = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar-dark custom-navbar ${scrolled ? 'scrolled' : ''
                    }`}
            >
                <div className="container">
                    <a className="navbar-brand" href="#" style={{ color: "#ffffff" }}>
                        Portfolio
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-10 ">
                            <li className="nav-item">
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                                    Work History
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="tech" spy={true} smooth={true} offset={-100} duration={100}>
                                    Tech Stack
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                                    Education
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Layout;
