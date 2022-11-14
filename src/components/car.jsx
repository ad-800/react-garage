import React from 'react';

function Car(props) {
  return (
    <li>
      <h2>{props.car.brand} - {props.car.model}</h2>
      <p><strong>Owner:</strong> {props.car.owner}</p>
    </li>
  );
}

export default Car;
