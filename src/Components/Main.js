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
            <div className="HighlightBackground">
                <div className="HighlightContent">
                    <h1 id="HighlightTitle">Specials</h1>
                    &nbsp;
                    <button className="button">Online Menu</button>
                    <div className="Card1">
                        <img className="CardImage1" src="../ICO/greek salad.jpg" alt="Greek salad" />
                        <div className="Card1Text">
                            <h4>Greek salad</h4>
                            <h4 id="Price1">$12.99</h4>
                            <p>The famous greek salad of crispy
                            lettuce, peppers, olives and our Chicago
                            style feta cheese, garnished with crunchy
                            garlic and rosemary croutons.</p>
                            <h4>Order a delivery</h4>
                        </div>
                    </div>
                    <div className="Card2">
                        <img className="CardImage2" src="../ICO/bruchetta.svg" alt="Bruchetta" />
                        <div className="Card2Text">
                            <h4>Bruchetta</h4>
                            <h4 id="Price2">$5.99</h4>
                            <p>Our Bruschetta is made from grilled
                            bread that has been smeared with garlic
                            and seasoned with salt and olive oil.</p>
                            <h4>Order a delivery</h4>
                            </div>
                    </div>
                    <div className="Card3">
                        <img className="CardImage3" src="../ICO/lemon dessert.jpg" alt="Bruchetta" />
                        <div className="Card3Text">
                            <h4>Lemon Dessert</h4>
                            <h4 id="Price3">$5.00</h4>
                            <p>This comes straight from grandma’s
                            recipe book, every last ingredient has
                            been sourced and is as authentic as
                            can be imagined.</p>
                            <h4>Order a delivery</h4>
                        </div>
                    </div>
                </div>
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