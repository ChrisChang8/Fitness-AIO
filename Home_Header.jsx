import React from 'react';
import './Home_Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";

const Home_Header = () => {
    const [menuOpened, setMenuOpened] = React.useState(false);

    const getMenuStyles = () => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" };
        }
    };

    return (
        <section className="h-wrapper fixed">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./ai-logo.png" alt="logo" width={100}/>

                {/* Full Screen Navbar */}
                <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false) }}>
                    <div className="flexCenter h-menu" style={getMenuStyles()}>
                        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                        <NavLink to="/workouts" onClick={() => window.scrollTo(0, 0)}>Workouts</NavLink>
                        <NavLink to="/calculators" onClick={() => window.scrollTo(0, 0)}>Calculators</NavLink>
                        <NavLink to="/tips" onClick={() => window.scrollTo(0, 0)}>Tips</NavLink>
                        <NavLink to="/shop" onClick={() => window.scrollTo(0, 0)}>Shop</NavLink>
                        <NavLink to="/ai" onClick={() => window.scrollTo(0, 0)}>AI</NavLink>
                    </div>
                </OutsideClickHandler>
                
                {/* Mobile Screen Navbar */}
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
}

export default Home_Header;
