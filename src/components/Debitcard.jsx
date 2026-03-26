import React, { Fragment, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

let CardPyment = () => {
  let location = useLocation();
  let item = location.state;

  let [payed, setpayed] = useState({
    isPayed: false,
  });

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [flip, setFlip] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      let formatted = value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();

      setCard({ ...card, number: formatted });
    } else {
      setCard({ ...card, [name]: value });
    }
  };

  let navigate = useNavigate();

  let payBtn = (event) => {
    event.preventDefault();

    if (
      card.name.trim() !== "" &&
      card.number.trim() !== "" &&
      card.expiry.trim() !== "" &&
      card.cvv.trim() !== ""
    ) {
      console.log(card);

      // ✅ FIXED (important)
      setpayed((prev) => ({
        ...prev,
        isPayed: true,
      }));

      setCard({
        name: "",
        number: "",
        expiry: "",
        cvv: "",
      });

      setFlip(false);

      setTimeout(() => {
        navigate("/Menu");
      }, 2000);
    } else {
      alert("Please Fill the Fields");
    }
  };

  // ✅ FIXED (mobile refresh / direct access issue)
  if (!item) {
    return <h3 className="text-center mt-5 text-white">No item selected</h3>;
  }

  return (
    <Fragment>
      <div className="payment-bg d-flex justify-content-center align-items-center">
        <div className="payment-container row shadow-lg">
          {/* 💳 CARD */}
          <div className="col-md-6 d-flex justify-content-center align-items-center fade-up">
            <div className={`card-box ${flip ? "flip" : ""}`}>
              {/* FRONT */}
              <div className="card-front">
                <div className="chip"></div>

                <h5 className="card-number">
                  {card.number || "**** **** **** ****"}
                </h5>

                <div className="d-flex justify-content-between">
                  <span>{card.name || "YOUR NAME"}</span>
                  <span>{card.expiry || "MM/YY"}</span>
                </div>
              </div>

              {/* BACK */}
              <div className="card-back">
                <div className="black-strip"></div>
                <div className="cvv-box">{card.cvv || "***"}</div>
              </div>
            </div>
          </div>

          {/* 🧾 FORM */}
          <div className="col-md-6 p-4 ">
            <h3 className="fw-bold text-center mb-4">Secure Payment </h3>

            <input
              type="text"
              name="name"
              placeholder="Card Holder Name"
              value={card.name}
              onChange={handleChange}
              className="form-control mb-3 input-anim"
            />

            <input
              type="text"
              name="number"
              placeholder="Card Number"
              value={card.number}
              onChange={handleChange}
              className="form-control mb-3 input-anim"
            />

            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={card.expiry}
                  onChange={handleChange}
                  className="form-control mb-3 input-anim"
                />
              </div>

              <div className="col">
                <input
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  value={card.cvv}
                  onChange={handleChange}
                  onFocus={() => setFlip(true)}
                  onBlur={() => setFlip(false)}
                  className="form-control mb-3 input-anim"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 pay-btn"
              onClick={payBtn}
            >
              Pay Now
            </button>

            {payed.isPayed && (
              <h5 className="text-success text-center mt-3">
                Payment Successful 🎉
              </h5>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardPyment;
