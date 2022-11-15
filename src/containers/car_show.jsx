import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { deleteCar } from '../actions';

class CarShow extends Component {
  handleClick = () => {
    this.props.deleteCar(this.props.car, this.props.history);
  };

  render() {
    if (!this.props.car) {
      return <Link to="/"></Link>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h2>{this.props.car.brand} - {this.props.car.model}</h2>
        <p><strong>Owner:</strong> {this.props.car.owner}</p>
        <p>{this.props.car.plate}</p>
        <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    car: state.cars.find(car => car.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
