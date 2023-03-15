import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="Dastine JHay BErnardo">
=======
      <div className="Dastine">
>>>>>>> c3638577f9c0a32a5c0923c4aa4be5dc1c054361
        <div className="d-flex justify-content-center align-item-center mt-5 align-items-center">
          <span style={{ fontSize: 25 }} className={this.getBageClassName()}>
            {this.formatCount()}
          </span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-warning btn-lg"
          >
            Incriment
          </button>
        </div>
        <div className="text-center mt-5">
          <ul className="list-group">
            {this.state.tags.length === 0 && (
              <p className="text-uppercase">input new row</p>
            )}
            {this.state.tags.map((tag) => (
              <li className="list-group-item list-group-item-primary" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  getBageClassName() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "danger" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
