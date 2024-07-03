import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import restauranfood from "../IMG/restauranfood.jpg";
import GreekSalad from "../IMG/greek salad.jpg";
import Bruchetta from "../IMG/bruchetta.jpg";
import LemonDessert from "../IMG/lemon dessert.jpg";
import RestaurantPatio from "../IMG/restaurant.jpg";
import RestaurantChefB from "../IMG/restaurant chef B.jpg";
import reviewImage1 from "../review/download.jpg";
import reviewImage2 from "../review/download (1).jpg";
import reviewImage3 from "../review/download (2).jpg";
import reviewImage4 from "../review/download (3).jpg";
import reviewRating from "../review/rating.5Stars.png";


function Main() {
  return (
    <div>
      <div className="Hero">
        <div className="HeroLeft">
          <h1 className="Title">Little Lemon</h1>
          <h2 className="Subtitle">Chicago</h2>
          <p className="Paragraph">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively, but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <Link className="button-link" to="/Booking">Reserve a table</Link>
          {/* <button className="button" ><Link className="button" to="/Booking">Reserve a table</Link></button> */}
        </div>
        <div className="HeroRight">
          <img
            className="Image"
            src={restauranfood}
            alt="Bruchetta"
          />
        </div>
      </div>
      <div className="HighlightBackground" id="Menu">
        <div className="HighlightContent">
          <h1 id="HighlightTitle">Specials</h1>
          &nbsp;
          <button className="button">Online Menu</button>
          <div className="Card1">
            <img
              className="CardImage"
              src={GreekSalad}
              alt="Greek salad"
            />
            <div className="CardText">
              <div className="CardTitle">
                <h4 id="FoodTitle">Greek salad</h4>
                <h4 id="Price">$12.99</h4>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <h4 className="Order">
                Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
              </h4>
            </div>
          </div>
          <div className="Card2">
            <img
              className="CardImage"
              src={Bruchetta}
              alt="Bruchetta"
            />
            <div className="CardText">
              <div className="CardTitle">
                <h4 id="FoodTitle">Bruchetta</h4>
                <h4 id="Price">$5.99</h4>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <h4 className="Order">
                Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
              </h4>
            </div>
          </div>
          <div className="Card3">
            <img
              className="CardImage"
              src={LemonDessert}
              alt="Lemon dessert"
            />
            <div className="CardText">
              <div className="CardTitle">
                <h4 id="FoodTitle">Lemon Dessert</h4>
                <h4 id="Price">$5.00</h4>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <h4 className="Order">
                Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="Testimonial" id="Testimonials">
        <h1 className="TestimonialHeader">Testimonials</h1>
        <div className="ReviewContainer">
          <div className="Review">
            <img
              className="ReviewRating"
              src={reviewRating}
              alt="Testimonial 1 rating"
            />
            <img
              className="ReviewImage"
              src={reviewImage1}
              alt="Testimonial 1"
            />
            <b className="ReviewText">Elisabeth</b>
            <p className="ReviewText">
              The food here is amazing, and the service is top-notch!
            </p>
          </div>
          <div className="Review">
            <img
              className="ReviewRating"
              src={reviewRating}
              alt="Testimonial 2 rating"
            />
            <img
              className="ReviewImage"
              src={reviewImage2}
              alt="Testimonial 2"
            />
            <b className="ReviewText">Leon</b>
            <p className="ReviewText">
              Perfect for events. Delicious food and great service.
            </p>
          </div>
          <div className="Review">
            <img
              className="ReviewRating"
              src={reviewRating}
              alt="Testimonial 3 rating"
            />
            <img
              className="ReviewImage"
              src={reviewImage3}
              alt="Testimonial 3"
            />
            <b className="ReviewText">Maria</b>
            <p className="ReviewText">
              Hidden gem with fantastic Mediterranean dishes!
            </p>
          </div>
          <div className="Review">
            <img
              className="ReviewRating"
              src={reviewRating}
              alt="Testimonial 4 rating"
            />
            <img
              className="ReviewImage"
              src={reviewImage4}
              alt="Testimonial 4"
            />
            <b className="ReviewText">Omar</b>
            <p className="ReviewText">
              Authentic flavors and a friendly staff. A must-visit!
            </p>
          </div>
        </div>
      </div>
      <div className="About" id="About">
        <div className="AboutContainer">
          <div className="AboutLeft">
            <h1 className="Title">Little Lemon</h1>
            <h2 className="Subtitle">Chicago</h2>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively, but casual environment.
              The restaurant features a locally sourced menu with daily
              specials.
            </p>
          </div>
          <div className="AboutRight">
            <img
              className="AboutImage1"
              src={RestaurantPatio}
              alt="Restaurant patio"
            />
            <img
              className="AboutImage2"
              src={RestaurantChefB}
              alt="Restaurant chef"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
