import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BookingSuccess from "./BookingSuccess";

var datePick = new Date().toISOString().split("T")[0];

function Booking() {
  
  const [BookingDone, setBookingDone] = useState(false);
  const [Data, setData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    Hour: "",
    Minutes: "",
    NumberOfGuests: 1,
  });

  function MyForm() {
    const formik = useFormik({
      initialValues: {
        FirstName: "",
        LastName: "",
        email: "",
        Hour: "",
        Minutes: "",
        Date: datePick,
        NumberOfGuests: 1,
      },
      validationSchema: Yup.object({
        FirstName: Yup.string().required("First name is required!"),
        LastName: Yup.string().required("Last name is required!"),
        Hour: Yup.string().required("Hour is required!"),
        Minutes: Yup.string().required("Minutes are required!"),
        email: Yup.string()
          .email("Invalid email address!")
          .required("E-mail is required!"),
        Date: Yup.date().required("Date is required!"),
        NumberOfGuests: Yup.number()
          .required("Number of guests is required!")
          .max(
            10,
            "If you want to book for more than 10 guests call us on the phone"
          ),
      }),
      onSubmit: (values, { resetForm }) => {
        // Send form data to the server
        setData(values);
        setBookingDone(true);
        <Link to="/BookingSuccess">BookingSuccess</Link>;
        console.log(values);
        resetForm();
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <label htmlFor="FirstName">First name:</label>
          </div>
          <input
            id="FirstName"
            name="FirstName"
            type="text"
            placeholder="First name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.FirstName}
          />
          {formik.touched.FirstName && formik.errors.FirstName ? (
            <div className="Err">{formik.errors.FirstName}</div>
          ) : null}
        </div>
        <br />
        <div>
          <div>
            <label htmlFor="LastName">Last name:</label>
          </div>
          <input
            id="LastName"
            name="LastName"
            type="text"
            placeholder="Last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.LastName}
          />
          {formik.touched.LastName && formik.errors.LastName ? (
            <div className="Err">{formik.errors.LastName}</div>
          ) : null}
        </div>
        <br />
        <div>
          <div>
            <label htmlFor="email">E-mail:</label>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="someone@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="Err">{formik.errors.email}</div>
          ) : null}
        </div>
        <br />
        <div>
          <div>
            <label htmlFor="Hour">Time:</label>
          </div>
          <select
            id="Hour"
            name="Hour"
            placeholder="Hour"
            defaultValue={""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Hour}
          >
            {/* <option value="">Hour</option> */}
            <option value="" disabled>
              Hour
            </option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>
          <span>:</span>

          <select
            id="Minutes"
            name="Minutes"
            placeholder="Minutes"
            defaultValue={""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Minutes}
          >
            {/* <option value="">Minutes</option> */}
            <option value="" disabled>
              Minutes
            </option>
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
          {formik.touched.Hour && formik.errors.Hour ? (
            <div className="Err">{formik.errors.Hour}</div>
          ) : null}
          {formik.touched.Minutes && formik.errors.Minutes ? (
            <div className="Err">{formik.errors.Minutes}</div>
          ) : null}
        </div>
        <br />
        <div>
          <div>
            <label htmlFor="Date">Date:</label>
          </div>
          <input
            id="Date"
            name="Date"
            type="date"
            placeholder="Date"
            min={datePick}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Date}
          />
          {formik.touched.Date && formik.errors.Date ? (
            <div className="Err">{formik.errors.Date}</div>
          ) : null}
        </div>
        <br />
        <div>
          <div>
            <label htmlFor="NumberOfGuests">Number of guests:</label>
          </div>
          <input
            id="NumberOfGuests"
            name="NumberOfGuests"
            type="number"
            placeholder={1}
            min={1}
            max={11}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.NumberOfGuests}
          />
          {formik.touched.NumberOfGuests && formik.errors.NumberOfGuests ? (
            <div className="Err">{formik.errors.NumberOfGuests}</div>
          ) : null}
        </div>
        <br />

        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    );
  }

  MyForm();
  return (
    <div className="Booking" id="Booking">
      {BookingDone ? null : <h2>Booking</h2>}
      <div className="BookingContainer">
        {BookingDone ? <BookingSuccess data={Data} /> : <MyForm />}
      </div>
    </div>
  );
}

export default Booking;
