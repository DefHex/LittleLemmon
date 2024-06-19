import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="TopLine" id="Home">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
