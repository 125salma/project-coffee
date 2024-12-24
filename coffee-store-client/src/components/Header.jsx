
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';




const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/" className="pl-8 md:text-white">Home</NavLink></li>
        <li><NavLink to="/addcoffee" className="pl-8  md:text-white">AddCoffee</NavLink></li>
        <li><NavLink to="/users" className="pl-8  md:text-white">Users</NavLink></li>
        <li><NavLink to="/contacts" className="pl-8  md:text-white">Contact</NavLink></li>

    </>



    return (
        <div>
            <div className="navbar bg-[#331A15]">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn sm:btn-ghost  lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-orange-100 rounded-box z-[1]  mt-3 w-32 p-2 shadow">
                            <h2 className='text-[#331A15]'>
                                {links}

                            </h2>
                        </ul>
                    </div>
                    <div className='flex items-center	'>
                        <img className='w-10' src="https://i.imghippo.com/files/ZoK5872EQ.png" alt="" />
                        <a className="text-xl text-white">Espresso Emporium</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn">Sign Up</button>

                            :
                            <Link to="/signIn">
                                <button className="btn">Sign in</button>
                            </Link>
                    }
                </div>
            </div>



        </div>
    );
};

export default Header;