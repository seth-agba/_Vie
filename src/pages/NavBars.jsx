import { useState , React} from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { MdOutlineClose } from "react-icons/md";

import { VscThreeBars } from "react-icons/vsc";

const NavBar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="_EKIP LOGO"></img>
                </Link>

                {/*   <ul className`="nav__Links"> */}
                <ul
                    className={`nav__Links ${isNavShowing ? "show__nav" : "hidden__nav"
                        } `}
                >
                    {links.map(({ path, name }, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => (isActive ? "active-nav" : "")}
                                    onClick={() => setIsNavShowing((prev) => !prev)}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="nav__toggle-btn"
                    onClick={() => setIsNavShowing((prev) => !prev)}
                >
                    {isNavShowing ? <MdOutlineClose /> : <VscThreeBars />}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
