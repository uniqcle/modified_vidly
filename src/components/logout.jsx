import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");

    window.location = "/";
  }

  render() {
    return <>return null;</>;
  }
}

export default Logout;
