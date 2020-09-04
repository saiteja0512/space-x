import React, { Component } from "react";
import "./Launch.css";

export class Launch extends Component {
  render() {
    return (
      <div className="launch">
        <img alt="poster" src={this.props.img} />
        <div className="content">
          <div className="info">
            <h3>{this.props.title}</h3>
            <h4>{this.props.date}</h4>
          </div>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default Launch;
