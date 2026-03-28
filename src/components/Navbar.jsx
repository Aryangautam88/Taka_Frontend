import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [authActive, setAuthActive] = useState("login");
    const [scrolled, setScrolled] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    // const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                {/* Links */}
                <ul ref={menuRef} className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/career">Career</NavLink></li>

                    {/* Mobile Auth */}
                    <div className="mobile-auth">

                        {/* OLD LOGIN REGISTER (SAFE COMMENT) */}
                        {/*
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
                        */}

                        {/* NEW LET'S TALK */}
                        <div className="auth-toggle">
                            <button
                                className={showForm ? "active" : ""}
                                onClick={() => {
                                    setShowForm(true);
                                    setMenuOpen(false);
                                }}
                            >
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </ul>
                {/* Desktop Auth (COMMENTED SAFE) */}
                {/*
                <div className="auth-toggle">
                    <button
                        className={authActive === "login" ? "active" : ""}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </button>

                    <button
                        className={authActive === "register" ? "active" : ""}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </div>
                */}

                {/* Desktop Let's Talk */}
                <div className="desktop-talk">
                    <div className="auth-toggle">
                        <button
                            className={showForm ? "active" : ""}
                            onClick={() => setShowForm(true)}
                        >
                            Let's Talk
                        </button>
                    </div>
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

            {/* MODAL */}
            {showForm && (
                <div className="modal">
                    <form
                        className="form"
                        onSubmit={async (e) => {
                            e.preventDefault();

                            const formData = {
                                name: e.target.name.value,
                                email: e.target.email.value,
                                message: e.target.message.value
                            };

                            await fetch("YOUR_GOOGLE_SCRIPT_URL", {
                                method: "POST",
                                mode: "no-cors",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(formData)
                            });

                            setShowForm(false);
                            setShowSuccess(true);

                            setTimeout(() => {
                                setShowSuccess(false);
                            }, 2500);
                        }}
                    >
                        <h2>Let's Talk</h2>

                        <input name="name" placeholder="Name" required />
                        <input name="email" type="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" required />

                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => setShowForm(false)}>
                            Close
                        </button>
                    </form>
                </div>
            )}
            {showSuccess && (
                <div className="success-popup">
                    <div className="success-card">
                        <h3>✅ Submitted!</h3>
                        <p>We’ll contact you soon.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;