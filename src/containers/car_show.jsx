import React from 'react';

function CarShow(props) {
  return (
    <div>
      <h2>{props.car.brand} - {props.car.model}</h2>
      <p><strong>Owner:</strong> {props.car.owner}</p>
      <p>{props.car.plate}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    car: state.cars.find(car => car.id === id),
  };
}

export default connect(mapStateToProps)(CarShow);
