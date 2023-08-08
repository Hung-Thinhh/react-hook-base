import './nav.scss'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeclassname="active" to="/" end>Home</NavLink>
            <NavLink activeclassname="active" to="/covid19">Covid19</NavLink>
            <NavLink activeclassname="active" to="/todo">Todo</NavLink>
            <NavLink activeclassname="active" to="/blog">Blogs</NavLink>
            <NavLink activeclassname="active" to="/haha">About</NavLink>
        </div>
    )
}

export default Nav;