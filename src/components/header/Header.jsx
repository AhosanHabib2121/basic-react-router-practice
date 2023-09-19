import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='mb-5 bg-blue-400 py-4 text-center text-white text-lg font-semibold'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/meals">Meal</NavLink>
            </nav>
        </div>
    );
};

export default Header;