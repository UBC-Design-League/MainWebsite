import "./Nav.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Nav = ({page}) => {

    const [position, setPosition] = useState("0");
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const windowScroll = () => {
            setPrevScrollPos(window.pageYOffset);
            setPosition(prevScrollPos < 10 ? "0" : "-100");
        }
        window.addEventListener("scroll", windowScroll);
        return () => window.removeEventListener("scroll", windowScroll);
    }, [prevScrollPos]);

    return (
        <>
            <div className={"navbar"} style={{
                top: `${position}px`
            }}>
                <div className={"nav-content"}>
                    <Link to={'/'}>
                        <button className={page === "home" ? "nav-active-text" : "nav-text-buttons"}
                                id={"home"}>Home
                        </button>
                    </Link>
                    <Link to={'/About'}>
                        <button className={page === "about" ? "nav-active-text" : "nav-text-buttons"}
                                id={"about"}>About
                        </button>
                    </Link>
                    <Link to={'/Designathon'}>
                        <button className={page === "designathon" ? "nav-active-text" : "nav-text-buttons"}
                                id={"team"}>Designathon
                        </button>
                    </Link>
                    <Link to={'/Events'}>
                        <button className={page === "events" ? "nav-active-text" : "nav-text-buttons"}
                                id={"faq"}>Events
                        </button>
                    </Link>
                    <Link to={'/Contact'}>
                        <button className={page === "contact" ? "nav-active-text" : "nav-text-buttons"}
                                id={"contact"}>Contact
                        </button>
                    </Link>
                    <Link to={'/Sponsor'}>
                        <button className={page === "sponsor" ? "nav-active-text" : "nav-text-buttons"}
                                id={"contact"}>Sponsor Us!
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav;