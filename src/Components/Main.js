import "../App.css";


function Main () {
    return(
        <div>
            <div className="Hero">
                <div className="HeroLeft">
                <h1 className="Title">Little Lemon</h1>
                <h2 className="Subtitle">Chicago</h2>
                <p className="Paragraph">Little Lemon is a charming neighbourhood bistro
                 that serves simple food and classic cocktails in a
                 lively, but casual environment. The restaurant features a
                 locally sourced menu with daily specials.</p>
                <button className="button">Reserve a table</button>
            </div>
            <div className="HeroRight">
                <img className="Image" src="../ICO/restauranfood.jpg" alt="Bruchetta" />
            </div>
            </div>
            <div className="Highlight">
                <p>Highlight</p>
            </div>
            <div className="Testimonial">
                <p>Testimonial</p>
            </div>
            <div className="About">
                <p>About</p>
            </div>
        </div>
    );
}

export default Main;