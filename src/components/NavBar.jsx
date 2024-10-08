import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div id="nav-container">
            <h1 id="logo">FAKESTORE</h1>
            <ul id="nav-cont">
                <li><Link to="/login"><button id="lr">Login</button></Link></li>
                <li><i className="fa-solid fa-bars"></i></li>
            </ul>
        </div>
    )
}
export default NavBar;