import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let ContactPage = () => {
  let [Message, setMessage] = useState({
    isSubmited: false,
  });

  let BtnClick = () => {
    setMessage((Message) => ({
      isSubmited: true,
    }));
  };

  let [form, setform] = useState({
    email: "",
    bio: "",
  });

  let SubmitBTN = (event) => {
    setform((form) => ({
      ...form,
      [event.target.name]: event.target.value,
    }));
  };

  let FormSubmit = (event) => {
    event.preventDefault();
    if (form.email.trim() !== "" && form.bio.trim() !== "") {
      console.log(form);
      alert("message sent successfully");

      setform((form) => ({
        ...form,
        email: "",
        bio: "",
      }));
    } else {
      alert("Please Fill the Form");
    }
  };

  // --------------------------------------------------------------- Navigate ------------------------------------------------------------------//

  let navigate = useNavigate();

  useEffect(() => {
    if (
      form.email.trim() !== "" &&
      form.bio.trim() !== "" &&
      Message.isSubmited === true
    ) {
      setTimeout(() => {
        navigate("/menu");
      }, 2000);
    }
  }, [form.email, form.bio, Message.isSubmited]);

  return (
    <Fragment>
      <div className="container py-5 px-3">
        {/*  Heading */}
        <div className="text-center mb-5 fade-up">
          <h1 className="fw-bold display-6">Need Help? We're Here for You</h1>
          <p className="text-muted">
            Contact us anytime for support, orders, or feedback
          </p>
        </div>

        {/*  Cards Section */}
        <div className="row justify-content-center g-4">
          {/*  Contact Info */}
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 d-flex">
            <div className="card w-100 border-0 shadow-lg p-4 rounded-4 card-animate text-center text-md-start">
              <h4 className="fw-bold mb-3">Contact Info</h4>

              <p>📍 Grandios Hotel, Rajahmundry</p>
              <p>📞 +91 123456789</p>
              <p>📧 seshasai@grandios.com</p>
              <p>🕒 10 AM – 11 PM</p>

              <hr />

              <h5 className="fw-bold mt-3">Follow Us</h5>

              <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram fs-4 icon-hover "></i>
                </a>

                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook fs-4 icon-hover "></i>
                </a>

                <a href="https://x.com/X" target="_blank">
                  <i className="fa-brands fa-x-twitter fs-4 icon-hover"></i>
                </a>
              </div>
            </div>
          </div>

          {/* 📨 Contact Form */}
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 d-flex">
            <div className="card w-100 border-0 shadow-lg p-4 rounded-4 card-animate">
              <h4 className="fw-bold mb-3 text-center text-md-start">
                Send Message
              </h4>

              <form onSubmit={FormSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control rounded-pill p-3"
                    name="email"
                    onChange={SubmitBTN}
                    value={form.email}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    placeholder="Your Message"
                    className="form-control rounded-3 p-3"
                    rows="4"
                    name="bio"
                    onChange={SubmitBTN}
                    value={form.bio}
                  ></textarea>
                </div>

                <button
                  className="btn btn-dark w-100 rounded-pill p-3"
                  onClick={BtnClick}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactPage;
