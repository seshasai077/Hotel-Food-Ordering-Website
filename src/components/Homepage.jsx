import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

let Homepage = () => {
  let [state, setstate] = useState({
    images: {
      img1: "https://th.bing.com/th/id/OIP.xjN5BTSBWX7s9MTpn0g03gHaEP?w=277&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      img2: "https://th.bing.com/th/id/OIP.QRPA95zpLlLq95mecvrVAwHaEJ?w=301&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      img3: "https://tse4.mm.bing.net/th/id/OIP.c_68PdhygcuBaevwNj109gHaEK?pid=ImgDet&w=206&h=115&c=7&dpr=1.1&o=7&rm=3",
    },
  });
  return (
    <Fragment>
      <div>
        {/* 🔥 HERO SECTION */}
        <section className="Homepagecss">
          <div>
            <h1 className="display-3 fw-bold text-black fade-up ">
              Grandios Hotel
            </h1>

            <p className="lead text-white fw-bold fade-up ">
              Luxury Dining & Delicious Food
            </p>

            <li>
              <Link
                to="/Menu"
                className="btn btn-warning btn-lg fade-up fw-bold"
              >
                Menu
              </Link>
            </li>
          </div>
        </section>

        {/*  ABOUT */}
        <section className="container py-5 text-center">
          <h2 className="fw-bold ">Welcome to Grandios</h2>
          <p className="mt-3">
            Experience premium dining with world-class chefs, rich flavors, and
            a luxurious ambience. Enjoy unforgettable meals with us.
          </p>
          <h2>Savor excellence where flavor meets elegance.</h2>
        </section>

        {/*  FEATURES */}
        <section className="container ">
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={state.images.img1}
                alt=""
                className="Homepageimages shadow-lg"
              />
              <h4>🍕 Quality Food</h4>
              <p>Fresh ingredients & expert chefs</p>
            </div>

            <div className="col-md-4">
              <img
                src={state.images.img2}
                alt=""
                className="Homepageimages shadow-lg"
              />
              <h4>🏨 Luxury Ambience</h4>
              <p>Elegant and comfortable dining</p>
            </div>

            <div className="col-md-4">
              <img
                src={state.images.img3}
                alt=""
                className="Homepageimages shadow-lg"
              />
              <h4>⚡ Fast Service</h4>
              <p>Quick and reliable service</p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Homepage;
