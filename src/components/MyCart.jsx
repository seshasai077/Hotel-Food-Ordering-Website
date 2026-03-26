import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
let MyCart = () => {
  let Location = useLocation();
  let item = Location.state;

  let [state, setstate] = useState({
    OrderConformed: false,
  });

  let PayonCash = () => {
    setstate((state) => ({
      ...state,
      OrderConformed: true,
    }));
  };
  // ------------------------------------------------------- counter -----------------------------------------------------------------------------//
  let [count, setcount] = useState({
    count: 1,
  });

  let increment = () => {
    setcount((count) => ({
      count: count.count + 1,
    }));
  };

  let decrement = () => {
    setcount((count) => ({
      count: count.count <= 1 ? 1 : count.count - 1,
    }));
  };

  let Total = () => {
    let grandTotal = count.count * item.Price;
    return grandTotal;
  };
  // ----------------------------------------------------- Navigation for the previous menu -------------------------------------------------------//
  let navigate = useNavigate();

  useEffect(() => {
    state.OrderConformed &&
      setTimeout(() => {
        navigate("/menu");
      }, 4000);
  }, [state.OrderConformed]); // it runs when only once when condition success so orderconformed is actually true so it runs

  // ------------------------------------------------------- order Cancel btn ------------------------------------------------------------------//

  let [cancel, setcancel] = useState({
    cancelOrder: false,
  });
  let CancelorderBtn = () => {
    setcancel((cancel) => ({
      cancelOrder: true,
    }));
  };
  useEffect(() => {
    if (cancel.cancelOrder) {
      let timer = setTimeout(() => {
        // it does something
        navigate("/Menu");
      }, 2000);
      return () => clearTimeout(timer); // it clears something that done
    }
  }, [cancel.cancelOrder]);

  // ------------------------------------------------------- Quotes ------------------------------------------------------------------------------//
  let quotes = [
    "Good food is the foundation of genuine happiness.",
    "Cravings satisfied, happiness delivered 😋",
    "Eat good, feel good.",
    "Happiness is homemade… and served hot.",
    "Food that makes you smile 😊",
  ];

  let [index, setIndex] = useState(0);
  let [fade, setFade] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true); // fade in
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div
        className="container-fluid  d-flex flex-column justify-content-center align-items-center bg-light "
        style={{ minHeight: "75vh" }}
      >
        {/*  Quotes */}
        <div className="w-100 text-center mb-4">
          <p
            className={`fst-italic fs-5 text-muted fw-bold ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "opacity 0.5s ease-in-out" }}
          >
            “{quotes[index]}”
          </p>
        </div>

        {/*  Card */}
        {item ? (
          <div className="col-11 col-md-10 col-lg-6">
            <div className="card border-0 shadow-lg rounded-4 p-3 w-100">
              <div className="row g-0 align-items-center">
                {/* Image */}
                <div className="col-md-5">
                  <img
                    src={item.strMealThumb}
                    alt=""
                    className="img-fluid rounded-4"
                  />
                </div>

                {/* Content */}
                <div className="col-md-7 text-center text-md-start p-3">
                  <h4 className="fw-bold">{item.strMeal}</h4>

                  <p className="text-muted small">
                    Freshly prepared | 20-30 mins delivery
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold text-success h3 m-0">
                      &#8377;{Total()}
                    </span>

                    <i
                      className="fa fa-plus-square mx-2 fs-5 "
                      onClick={increment}
                    ></i>

                    <span className="fw-bold">{count.count}</span>

                    <i
                      className="fa fa-minus-square mx-2 fs-5"
                      onClick={decrement}
                    ></i>
                  </div>

                  <hr />

                  {!state.OrderConformed ? (
                    <>
                      <span className="fw-semibold d-block mb-2">
                        Choose Payment
                      </span>

                      <div className="d-flex flex-column flex-md-row gap-2">
                        <button
                          className="btn btn-dark rounded-pill"
                          onClick={PayonCash}
                        >
                          Cash
                        </button>

                        <Link
                          to="/Debitcard"
                          state={item}
                          className="btn btn-dark rounded-pill text-white text-decoration-none"
                        >
                          Card
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="mt-3">
                      <h5 className="text-success fw-bold">
                        Order Confirmed 🎉
                      </h5>
                      <p className="text-muted small">
                        Your food will be delivered soon!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-dark rounded-pill mt-4 p-3 "
                onClick={CancelorderBtn}
              >
                Cancel Order
              </button>
            </div>
          </div>
        ) : (
          <h4>No item selected</h4>
        )}
        {cancel.cancelOrder && (
          <h1 className="text-danger fw-bold mt-4 animate">
            ❌ Your Order Cancelled Successfully
          </h1>
        )}
      </div>
    </Fragment>
  );
};

export default MyCart;
