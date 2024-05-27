import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons"

function Main() {
    return (
        <div>
            <div className="Hero">
                <div className="HeroLeft">
                    <h1 className="Title">Little Lemon Test change</h1>
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
            <div className="HighlightBackground" id="Menu">
                <div className="HighlightContent">
                    <h1 id="HighlightTitle">Specials</h1>
                    &nbsp;
                    <button className="button">Online Menu</button>
                    <div className="Card1">
                        <img className="CardImage" src="../ICO/greek salad.jpg" alt="Greek salad" />
                        <div className="CardText">
                            <div className="CardTitle">
                                <h4 id="FoodTitle">Greek salad</h4>
                                <h4 id="Price">$12.99</h4>
                            </div>
                            <p>The famous greek salad of crispy
                                lettuce, peppers, olives and our Chicago
                                style feta cheese, garnished with crunchy
                                garlic and rosemary croutons.</p>
                            <h4 className="Order">Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></h4>
                        </div>
                    </div>
                    <div className="Card2">
                        <img className="CardImage" src="../ICO/bruchetta.svg" alt="Bruchetta" />
                        <div className="CardText">
                            <div className="CardTitle">
                                <h4 id="FoodTitle">Bruchetta</h4>
                                <h4 id="Price">$5.99</h4>
                            </div>
                            <p>Our Bruschetta is made from grilled
                                bread that has been smeared with garlic
                                and seasoned with salt and olive oil.</p>
                            <h4 className="Order">Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></h4>
                        </div>
                    </div>
                    <div className="Card3">
                        <img className="CardImage" src="../ICO/lemon dessert.jpg" alt="Bruchetta" />
                        <div className="CardText">
                            <div className="CardTitle">
                                <h4 id="FoodTitle">Lemon Dessert</h4>
                                <h4 id="Price">$5.00</h4>
                            </div>
                            <p>This comes straight from grandma’s
                                recipe book, every last ingredient has
                                been sourced and is as authentic as
                                can be imagined.</p>
                            <h4 className="Order">Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Testimonial">
                <p>Testimonial</p>
            </div>
            <div className="About" id="About">
                <div className="AboutContainer">
                    <div className="AboutLeft">
                        <h1 className="Title">Little Lemon</h1>
                        <h2 className="Subtitle">Chicago</h2>
                        <p>Little Lemon is a charming neighbourhood bistro
                            that serves simple food and classic cocktails in a
                            lively, but casual environment. The restaurant features a
                            locally sourced menu with daily specials.</p>
                    </div>
                    <div className="AboutRight">
                        <img className="AboutImage1" src="../ICO/restaurant.jpg" alt="Bruchetta" />
                        <img className="AboutImage2" src="../ICO/restaurant chef B.jpg" alt="Bruchetta" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;