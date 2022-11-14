import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Car from "../components/car";
import { listCars } from "../actions";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.listCars(this.props.garage);
  }

  renderCars = () => {
    return this.props.cars.map((car) => {
      return <Car key={car.id} car={car} />;
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.props.garage}</h1>
        <ul>
          {this.renderCars()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ listCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
