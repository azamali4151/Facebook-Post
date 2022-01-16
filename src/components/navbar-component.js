import React, { Component } from "react";

class Navbar extends React.Component {

  render() {
    const { like, dislike } = this.props;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Facebook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Like { like }
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pull-right" href="#">
                  Dislike { dislike }
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
