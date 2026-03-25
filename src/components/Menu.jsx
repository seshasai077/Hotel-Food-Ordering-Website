import React, { Component, Fragment, useEffect, useState } from "react";
import FoodItems from "../services/service";
import { useNavigate } from "react-router-dom";

let Menupage = () => {
  let [state, setstate] = useState({
    items: [],
  });

  let [search, setsearch] = useState("");

  useEffect(() => {
    //component Did Mount
    const Price = (id) => {
      let num = parseInt(id, 10);
      return 600 + (num % 1400); // range 600–2000
    };
    FoodItems.getAllFoodItems()
      .then((response) => {
        let Itemprice = response.data.meals.map((item) => {
          return {
            ...item,
            Price: Price(item.idMeal),
          };
        });
        setstate({
          items: Itemprice,
        });
        // console.log(Itemprice);
      })
      .catch((error) => {
        <h1>error</h1>;
      });
  }, []);

  // ----------------------------------------------------- navigation ------------------------------------------------------------------//
  let navigate = useNavigate();

  // ------------------------------------------------ filtering based on names of food ------------------------------------------------//

  let filterditems = state.items.filter((item) =>
    item.strMeal.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="text-black fade-up text-center mt-2">
            <h2 className="fw-bold ">
              Experience luxury in every bite — order your favorite now 🍷
            </h2>
          </div>
          {/* --------------------------------------- search bar ------------------------------------------------------------------ */}

          <div className="search-box text-center mb-3 mt-3 search-container my-4 fade-upper">
            <i className="bi bi-search search-icon"></i>
            <input
              type="search"
              placeholder="Search food items"
              className="search-input"
              value={search}
              onChange={(event) => setsearch(event.target.value)}
            />
          </div>

          {search && (
            <i
              className="bi bi-x-circle clear-icon"
              onClick={() => setsearch("")}
            ></i>
          )}
          {/* ------------------------------------------------  map function for the card items --------------------------------------------      */}
          <div className="row justify-content-center">
            {
              // we use .filter to filter based on names  and the we use map function

              filterditems.map((item) => {
                // mapfunction
                return (
                  <div
                    className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                    key={item.idMeal}
                  >
                    <div className="card mb-2 mt-3 shadow-lg">
                      <div className="card-header fw-bolder text-center">
                        {item.strMeal}
                      </div>
                      <div className="card-body">
                        <img
                          src={item.strMealThumb}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span className="fw-bold">&#8377;{item.Price}</span>
                        <button
                          className="btn btn-success "
                          onClick={() => navigate("/MyCart", { state: item })}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
            {filterditems.length === 0 && (
              <p className="text-center mt-4">No items match your search. </p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Menupage;
