import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar,faCheck,faClock,faEnvelope } from "@fortawesome/free-solid-svg-icons";
function BookingSuccess({ data }) {
  return (
    <>
      <div className="BookingSuccess" id="BookingSuccess">
        <h2>Thank you {data.FirstName}</h2>
      </div>
      <div className="BookingConfirmed">
        <div className="BookingConfirmedContainer">
          <p>Your booking has been confirmed <FontAwesomeIcon icon={faCheck} />. We cannot wait to welcome you!</p>
          <p>
            Reservation for {data.NumberOfGuests} is done under the name{" "}
            {data.FirstName + " " + data.LastName +"."}
          </p>
          <p>
            On {data.Date} <FontAwesomeIcon icon={faCalendar} /> at {data.Hour + ":" + data.Minutes} <FontAwesomeIcon icon={faClock} />
          </p>
          <p>Confirmation email <FontAwesomeIcon icon={faEnvelope} /> to {data.email} will be sent shortly.</p>
        </div>
      </div>
    </>
  );
}

export default BookingSuccess;
