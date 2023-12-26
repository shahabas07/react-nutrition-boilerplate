import React, { Component } from "react";
import "./App.css";
import FoodBox from "./Components/FoodBox";
import resources from "../resources/FoodData";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  changingInput = (e) => {
    this.setState(() => {
      return {
        value: e.target.value,
      };
    });
  };

  render() {
    let data = resources;
    let filteredData = data.filter((item) => {
      return item.name.includes(this.state.value);
    });

    return (
      <div>
        <input
          type="text"
          className="search"
          value={this.state.value}
          onChange={this.changingInput}
        />
        {filteredData.length === 0 ? (
          <div className="noresult">No Results</div>
        ) : (
          filteredData.map((item) => <FoodBox props1={item} key={item.id} />)
        )}
      </div>
    );
  }
}
