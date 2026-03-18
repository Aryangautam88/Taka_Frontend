import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [authActive, setAuthActive] = useState("login");
    const [scrolled, setScrolled] = useState(false);

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const navigate = useNavigate();

    // scroll glass effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // close menu on outside click / scroll
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !hamburgerRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        };

        const closeOnScroll = () => setMenuOpen(false);

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", closeOnScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", closeOnScroll);
        };
    }, [menuOpen]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            {/* Links */}
            <ul ref={menuRef} className={`nav-links ${menuOpen ? "show" : ""}`}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    Home
                </NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                    About
                </NavLink></li>
                <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
                    Services
                </NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                    Contact
                </NavLink></li>
                <li><NavLink to="/career" className={({ isActive }) => isActive ? "active" : ""}>
                    Career
                </NavLink></li>

                {/* Mobile Auth */}
                <div className="mobile-auth">
                    <div className="auth-toggle">
                        <button
                            className={authActive === "login" ? "active" : ""}
                            onClick={() => {
                                setAuthActive("login");
                                navigate("/login");
                                setMenuOpen(false);
                            }}
                        >
                            Log in
                        </button>

                        <button
                            className={authActive === "register" ? "active" : ""}
                            onClick={() => {
                                setAuthActive("register");
                                navigate("/register");
                                setMenuOpen(false);
                            }}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </ul>

            {/* Desktop Auth */}
            {/* Desktop Auth */}
            <div className="auth-toggle">
                <button
                    className={authActive === "login" ? "active" : ""}
                    onClick={() => {
                        setAuthActive("login");
                        navigate("/login");
                    }}
                >
                    Log in
                </button>

                <button
                    className={authActive === "register" ? "active" : ""}
                    onClick={() => {
                        setAuthActive("register");
                        navigate("/register");
                    }}
                >
                    Register
                </button>
            </div>

            {/* Hamburger */}
            <div
                ref={hamburgerRef}
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;