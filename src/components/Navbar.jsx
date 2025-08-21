import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <nav className="NavBar"
            style={{ backgroundColor: "white", color: "black" }}>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dash">Dashboard</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/games">Games</NavLink></li>
            </ul>
        </nav>
    )
}