import React, { Fragment } from "react";
import "./App.css";
import "./index.css";
import Menupage from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactpage from "./components/Contact";
import MyCart from "./components/MyCart";
import Nav from "./components/navbar";
import Homepage from "./components/Homepage";
import Footerpage from "./components/Footer";
import CardPyment from "./components/Debitcard";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <div className="d-flex flex-column min-vh-100">
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Homepage />} />{" "}
              {/* default page is Home page not Nav */}
              <Route path="/Menu" element={<Menupage />} />
              <Route path="/Contact" element={<Contactpage />} />
              <Route path="/MyCart" element={<MyCart />} />
              <Route path="/Debitcard" element={<CardPyment />} />
              <Route path="/Homepage" element={<Homepage />} />
            </Routes>
          </div>
          <Footerpage />
        </div>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
