import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    const { password } = this.state;
    this.setState((prevState) => ({
      clicked: true,
      validated: password === "0000",
    }));
  };

  render() {
    const { password, clicked, validated } = this.state;
    return (
      <div>
        <input
          type="password"
          value={password}
          onChange={this.handleChange}
          className={clicked ? (validated ? "success" : "failure") : ""}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
