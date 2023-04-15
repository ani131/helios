import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarHome.css";
import helios from "../../img/helios.png";

class NavbarHome extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked }); // handles the hamburger bar thingy
  };
  closeNavbar = () => {
    this.setState({ clicked: false }); // closes navbar when the link is clicked
  };
  render() {
    return (
      <>
        <nav class="home_nav">
          {/* The logo (will be changed) */}
          <a href="/">
            <img src={helios} alt="helios" width="150" height="150" />
          </a>

          {/* div for navbar links */}
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li onClick={this.closeNavbar}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={this.closeNavbar}>
                <Link to="/training">Training</Link>
              </li>
              <li onClick={this.closeNavbar}>
                <Link to="/journey">The Journey</Link>
              </li>
              <li onClick={this.closeNavbar}>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li onClick={this.closeNavbar}>
                <Link to="/sources">Sources</Link>
              </li>
            </ul>
          </div>
          {/* hamburger menu */}
          <div id="hamburger_home" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              style={{ color: "#D7942E" }}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default NavbarHome;
