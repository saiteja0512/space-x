import React, { Component } from "react";
import Launch from "../Launch/Launch";
import "./LaunchList.css";
import axios from "axios";

export class LaunchList extends Component {
  state = {
    launches: [],
  };

  componentDidMount = () => {
    this.getLaunches();
  };

  getLaunches = () => {
    console.log("get launched..");
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        console.log(response.data);

        this.setState({
          launches: response.data,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  launchList = () => {
    const list = this.state.launches.map((launch, index) => {
      const imgCondition =
        launch.links.flickr_images.length === 0
          ? "https://farm8.staticflickr.com/7624/17170624642_e5949d160e_o.jpg"
          : launch.links.flickr_images[0];
      return (
        <Launch
          key={"launch" + index}
          title={launch.mission_name}
          date={launch.launch_date_local}
          img={imgCondition}
          desc={launch.details}
        />
      );
    });
    return list;
  };

  render() {
    // console.log(this.state.launches);
    return <div className="launchlist">{this.launchList()}</div>;
  }
}

export default LaunchList;
