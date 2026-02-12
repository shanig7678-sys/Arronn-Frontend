import { NavLink, useNavigate } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('contact')
    }
    return (
        <header>
            <div className="logo">
                <NavLink to='/'>
                    <img src="./assets/logo.svg" alt="logo" />
                </NavLink>
            </div>
            <nav>
                <ul className="nav-bar">
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/about'>ABOUT ME</NavLink></li>
                    <li><NavLink to='/product'>PRODUCT</NavLink></li>
                </ul>
                <button className="header-btn" onClick={handleClick}>
                    CONTACT
                </button>
            </nav>
        </header>
    )
}

export default Navbar
