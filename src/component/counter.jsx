import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-item-center mt-5 align-items-center">
          <span style={{ fontSize: 20 }} className={this.getBageClassName()}>
            {this.formatCount()}
          </span>
          <button className="btn btn-warning btn-lg">Incriment</button>
        </div>
        <div className="text-center text-decoration-none mt-5">
          <ul className="list-group">
            {this.state.tags.map((tags) => (
              <li className="list-group-item list-group-item-primary">
                {tags}
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
