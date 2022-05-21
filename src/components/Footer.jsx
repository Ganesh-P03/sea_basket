import React from "react";

function Footer() {
  return (
    <div className="container container_footer">
      <footer className="py-5 footer">
        <div className="row">
          <div className="col-1">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Category
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1 subscribe">
            <form>
              <h5>Subscribe to our SEA Basket</h5>
              <p>Monthly digest of whats new and exciting from us</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="d-flex justify-content-between py-4 my-4 border-top"
          classNameName="subscribe"
        >
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/sea-basket-9c19f.appspot.com/o/sea_basket.png?alt=media&token=f107684c-2585-4e59-b737-4202977b3cc4" />
      </div>
    </div>
  );
}

export default Footer;
