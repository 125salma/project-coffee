
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center'>
            <NavLink to="/" className="pl-8">Home</NavLink>
            <NavLink to="/addcoffee" className="pl-8">AddCoffee</NavLink>
            <NavLink to="/users" className="pl-8">Users</NavLink>
            <NavLink to="/signUp" className="pl-8">Sign Up</NavLink>
            <NavLink to="/SignIn" className="pl-8">Sign In</NavLink>

        </div>
    );
};

export default Header;