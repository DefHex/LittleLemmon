import "../App.css";

function Footer () {
    return(
        <div className="Footer">
            <img src="/IMG/icons_assets/bruchetta.jpg" alt="Bruchetta" />
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
            <div>
                <h2>Contact</h2>
                <p>Address:asdasd</p>
                <p>Phone:534354534</p>
                <p>Email:asdasdas</p>
            </div>
            <dir>
                <h2>Social Media Links</h2>
                <ul>
                    <li><a href='Facebook'>Facebook</a></li>
                    <li><a href='Instagram'>Instagram</a></li>
                    <li><a href='YouTube'>YouTube</a></li>
                </ul>
            </dir>
        </div>
    );
}

export default Footer;