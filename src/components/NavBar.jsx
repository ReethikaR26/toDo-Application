import { useContext } from 'react';
import {Link} from 'react-router-dom'
import UserContext from '../context/UserContext';
import './NavBar.css';
import {  FaPencilAlt,FaUser   } from 'react-icons/fa';


function NavBar(){
    const {user}=useContext(UserContext);
    return(
        <>
        
        <nav className='nav-bar'>
            <div className='nav-brand'>
                <Link to="/" className="brand-link">
                    <span className="brand-icon"><FaPencilAlt/></span>
                    <span className="brand-text">Wha-To-Do</span>
                </Link>
            </div>
            <div className='nav-links'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/todos" className="nav-link">Todo</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
            {user && (
                <div className="nav-user">
                    <span className="user-avatar"><FaUser/></span>
                    <span className="user-name">{user.name || 'User'}</span>
                </div>
            )}
        </nav>
        
        </>
    );
}

export default NavBar;