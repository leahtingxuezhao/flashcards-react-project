import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="header-container">
        <div id="nav-box">
          <button className="header-buttons">Search</button>
          <button className="header-buttons">Browse</button>
          <button className="header-buttons">Create</button>
        </div>
        <button id="upgrade-button">Upgrade free 7-day trial</button>
        <button id="login">Log in</button>
      </div>
    );
  }
}

export default Header;
