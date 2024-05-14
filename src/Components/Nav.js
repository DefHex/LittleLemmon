import "../App.css";

function Nav () {
    return(
        <div className="Nav">
            <nav>
                <ul>
                    <li><a href='Home'>Home</a></li> 
                    <li><a href='About'>About</a></li>
                    <li><a href='Menu'>Menu</a></li>
                    <li><a href='Reservations'>Reservations</a></li>
                    <li><a href='Order online'>Order online</a></li>
                    <li><a href='Login'>Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;