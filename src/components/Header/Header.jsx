import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1>React Example</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/photos">Photos</Link>
            </nav>
        </header>
    );
}
export default Header;