import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Booking from "./Components/Booking";
import BookingSuccess from "./Components/BookingSuccess";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/LittleLemmon" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/BookingSuccess" element={<BookingSuccess />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
